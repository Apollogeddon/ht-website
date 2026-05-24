import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pagesToCheck = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/solutions", name: "Solutions" },
  { path: "/testimonials", name: "Testimonials" },
  { path: "/policies", name: "Policies" },
  { path: "/blog", name: "Blog" },
  { path: "/blog/welcome", name: "Blog post" },
  { path: "/404.html", name: "404" },
];

test.describe("accessibility", () => {
  for (const { path, name } of pagesToCheck) {
    test(`${name} page should not have any automatically detectable accessibility issues`, async ({ page }) => {
      await page.goto(path);
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
