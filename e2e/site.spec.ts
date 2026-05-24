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

  test("custom 404 page renders for unknown routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.locator("body")).toContainText(/404|not found/i);
  });
});
