import { expect, test } from "@playwright/test";

const pagesToCheck = [
	{ path: "/", name: "Home" },
	{ path: "/about", name: "About" },
	{ path: "/contact", name: "Contact" },
	{ path: "/blog", name: "Blog Index" },
	{ path: "/solutions", name: "Solutions" },
	{ path: "/testimonials", name: "Testimonials" },
	// Add a specific blog post if you have a stable one, e.g., '/blog/welcome'
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
			const description = await page.getAttribute(
				'meta[name="description"]',
				"content",
			);
			expect(description).not.toBeNull();
			expect(description?.length).toBeGreaterThan(10); // Ensure it's not empty or too short

			// Check Open Graph Title
			const ogTitle = await page.getAttribute(
				'meta[property="og:title"]',
				"content",
			);
			expect(ogTitle).not.toBeNull();
			expect(ogTitle?.length).toBeGreaterThan(0);

			// Check Open Graph Description
			const ogDescription = await page.getAttribute(
				'meta[property="og:description"]',
				"content",
			);
			expect(ogDescription).not.toBeNull();

			// Check Canonical URL
			const canonical = await page.getAttribute(
				'link[rel="canonical"]',
				"href",
			);
			expect(canonical).not.toBeNull();
		});
	}
});
