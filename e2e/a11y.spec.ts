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
  test.slow(); // Increase timeout for accessibility scans

  for (const { path, name } of pagesToCheck) {
    test(`${name} page should not have any automatically detectable accessibility issues`, async ({ page }) => {
      await page.goto(path);

      // Force all scroll-reveal elements to be visible to avoid contrast issues during transition
      await page.addStyleTag({
        content: `
          .scroll-reveal { 
            opacity: 1 !important; 
            visibility: visible !important;
            transition: none !important; 
            transform: none !important;
          }
        `,
      });

      // Wait for theme script to run and layout to stabilize
      await page.waitForTimeout(1000);

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
