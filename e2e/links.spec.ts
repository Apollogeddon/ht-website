import { expect, test } from "@playwright/test";

test.describe("External link integrity", () => {
  test("no broken external links on homepage", async ({ page, request }) => {
    await page.goto("/");

    const hrefs = await page.$$eval("a[href]", (anchors) =>
      anchors
        .map((a) => a.getAttribute("href") ?? "")
        .filter((href) => href.startsWith("http://") || href.startsWith("https://")),
    );

    const uniqueHrefs = [...new Set(hrefs)];

    for (const href of uniqueHrefs) {
      const response = await request.head(href, { timeout: 10000 }).catch(() => null);
      if (response) {
        expect(response.status(), `Broken external link: ${href}`).not.toBe(404);
        expect(response.status(), `Broken external link: ${href}`).not.toBe(410);
      }
    }
  });
});

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
