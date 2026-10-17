import { expect, test } from "@playwright/test";

const pagesToCheck = [
  { path: "/", name: "Home" },
  { path: "/profiles", name: "Profiles" },
  { path: "/contact", name: "Contact" },
  { path: "/blog", name: "Blog Index" },
  { path: "/solutions", name: "Solutions" },
  { path: "/testimonials", name: "Testimonials" },
  { path: "/policies", name: "Policies" },
  { path: "/blog/welcome", name: "Blog post" },
];

test.describe("SEO Metadata", () => {
  for (const pageInfo of pagesToCheck) {
    test(`${pageInfo.name} page has essential SEO tags`, async ({ page }) => {
      await page.goto(pageInfo.path);

      // Check Title
      const title = await page.title();
      expect(title).not.toBe("");
      expect(title.length).toBeGreaterThan(0);

      // Check Meta Description
      const description = await page.getAttribute('meta[name="description"]', "content");
      expect(description).not.toBeNull();
      expect(description?.length).toBeGreaterThan(10); // Ensure it's not empty or too short

      // Check Open Graph Title
      const ogTitle = await page.getAttribute('meta[property="og:title"]', "content");
      expect(ogTitle).not.toBeNull();
      expect(ogTitle?.length).toBeGreaterThan(0);

      // Check Open Graph Description
      const ogDescription = await page.getAttribute('meta[property="og:description"]', "content");
      expect(ogDescription).not.toBeNull();

      // Check Canonical URL
      const canonical = await page.getAttribute('link[rel="canonical"]', "href");
      expect(canonical).not.toBeNull();

      // Check the share image is an absolute raster the page's card can show
      const ogImage = await page.getAttribute('meta[property="og:image"]', "content");
      expect(ogImage).toMatch(/^https:\/\/.+\.(png|jpg)$/);
      expect(await page.getAttribute('meta[name="twitter:image"]', "content")).toBe(ogImage);
      expect(await page.getAttribute('meta[property="og:url"]', "content")).toBe(canonical);

      // Check the structured data parses and names the business
      const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
      const graph = JSON.parse(jsonLd ?? "{}")["@graph"] as { "@type": string; name?: string }[];
      expect(graph.find((node) => node["@type"] === "ProfessionalService")?.name).toBe("Harnessing Talent");
    });
  }
});

test.describe("Crawling", () => {
  test("robots.txt points at the sitemap", async ({ request }) => {
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain("Sitemap: https://ht.apollogeddon.com/sitemap-index.xml");
  });

  test("the sitemap lists the pages", async ({ request }) => {
    const index = await request.get("/sitemap-index.xml");
    expect(index.ok()).toBe(true);
    const sitemap = await (await request.get("/sitemap-0.xml")).text();
    for (const pageInfo of pagesToCheck) {
      expect(sitemap).toContain(`<loc>https://ht.apollogeddon.com${pageInfo.path.replace(/\/?$/, "/")}</loc>`);
    }
  });
});
