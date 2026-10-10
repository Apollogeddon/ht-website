import { expect, test } from "@playwright/test";

const pagesToCheck = [
  "/",
  "/profiles",
  "/contact",
  "/solutions",
  "/testimonials",
  "/policies",
  "/blog",
  "/blog/welcome",
];

test.describe("Link integrity", () => {
  for (const path of pagesToCheck) {
    test(`no broken internal links on ${path}`, async ({ page, request }) => {
      await page.goto(path);

      const hrefs = await page.$$eval("a[href]", (anchors) =>
        anchors
          .map((a) => a.getAttribute("href") ?? "")
          .filter((href) => href.startsWith("/") && !href.startsWith("//") && !href.includes("#")),
      );

      const uniqueHrefs = [...new Set(hrefs)];

      for (const href of uniqueHrefs) {
        const response = await request.get(href);
        expect(response.status(), `Broken link on ${path}: ${href}`).not.toBe(404);
      }
    });
  }
});
