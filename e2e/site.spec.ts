import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Harnessing Talent/);
});

test("home page renders with a visible h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("navigation to blog works", async ({ page }) => {
  const viewport = page.viewportSize();
  // Desktop nav is hidden on mobile (hamburger pattern) — skip narrow viewports
  if (viewport && viewport.width < 768) {
    test.skip();
    return;
  }
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Blog Posts" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Blog Posts");
});

test("navigation to contact works", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Contact Us");
});

test.describe("page rendering", () => {
  const pages = [
    { path: "/solutions", label: "Solutions" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/policies", label: "Policies" },
    { path: "/profiles", label: "Profiles" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  for (const { path, label } of pages) {
    test(`${label} page renders with a visible h1`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test("blog post dynamic route renders", async ({ page }) => {
    await page.goto("/blog/welcome");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("404 page renders with correct content", async ({ page }) => {
    // Navigate directly to built file — astro preview doesn't forward unknown routes
    // to 404.html the way GitHub Pages does
    await page.goto("/404.html");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/not found/i);
  });
});

test("the trusted-by rotation keeps one timer however often the home page is revisited", async ({ page, isMobile }) => {
  test.skip(isMobile, "the desktop navigation is hidden on phones");
  // The site names one organisation, which doesn't rotate, so serve the home page with two.
  await page.route(
    (url) => url.pathname === "/",
    async (route) => {
      const response = await route.fetch();
      const body = (await response.text()).replace(
        /data-orgs="[^"]*"/,
        'data-orgs="[&quot;One&quot;,&quot;Two&quot;]"',
      );
      await route.fulfill({ response, body });
    },
  );
  // Counts the rotation's timers (3 s) that are still running.
  await page.addInitScript(() => {
    const running = new Set<unknown>();
    const set = window.setInterval.bind(window);
    const clear = window.clearInterval.bind(window);
    window.setInterval = ((handler: TimerHandler, timeout?: number, ...args: unknown[]) => {
      const id = set(handler, timeout, ...args);
      if (timeout === 3000) running.add(id);
      return id;
    }) as typeof window.setInterval;
    window.clearInterval = ((id?: number) => {
      running.delete(id);
      clear(id);
    }) as typeof window.clearInterval;
    Object.assign(window, { rotations: () => running.size });
  });
  const rotations = () => page.evaluate(() => (window as unknown as { rotations: () => number }).rotations());

  await page.goto("/");
  await expect.poll(rotations).toBe(1);
  for (let visit = 0; visit < 3; visit++) {
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Blog Posts" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Blog Posts");
    await page.goBack();
    await expect(page.getByText("Trusted by:")).toBeVisible();
  }
  await expect.poll(rotations).toBe(1);
});
