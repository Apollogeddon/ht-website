import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pagesToCheck = [
  { path: "/", name: "Home" },
  { path: "/profiles", name: "Profiles" },
  { path: "/contact", name: "Contact" },
  { path: "/solutions", name: "Solutions" },
  { path: "/testimonials", name: "Testimonials" },
  { path: "/policies", name: "Policies" },
  { path: "/blog", name: "Blog" },
  { path: "/blog/welcome", name: "Blog post" },
  { path: "/404.html", name: "404" },
];

const revealAll = `
  .scroll-reveal {
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    transform: none !important;
  }
`;

for (const theme of ["light", "dark"] as const) {
  test.describe(`accessibility (${theme} theme)`, () => {
    test.slow(); // Increase timeout for accessibility scans
    // the site's own theme setting, read before first paint
    test.beforeEach(async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
    });

    for (const { path, name } of pagesToCheck) {
      test(`${name} page should not have any automatically detectable accessibility issues`, async ({ page }) => {
        await page.goto(path);
        expect(await page.evaluate(() => document.documentElement.classList.contains("dark"))).toBe(theme === "dark");

        // Force all scroll-reveal elements to be visible to avoid contrast issues during transition
        await page.addStyleTag({ content: revealAll });

        // Wait for layout to stabilize
        await page.waitForTimeout(500);

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      });
    }
  });
}
