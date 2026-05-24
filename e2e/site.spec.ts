import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Harnessing Talent/);
});

test("hero section has correct text", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Business success through people");
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
  await page.goto("/");
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Contact Us");
});

test.describe("page rendering", () => {
  const pages = [
    { path: "/solutions", label: "Solutions" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/policies", label: "Policies" },
    { path: "/about", label: "About" },
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
