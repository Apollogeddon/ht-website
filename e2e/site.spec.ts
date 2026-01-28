import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Harnessing Talent/);
});

test("hero section has correct text", async ({ page }) => {
	await page.goto("/");

	// Expects the hero to contain the main heading
	await expect(page.getByRole("heading", { level: 1 })).toContainText(
		"Business success through people",
	);
});

test("navigation to blog works", async ({ page }) => {
	await page.goto("/");

	// Click the Blog link.
	await page
		.getByRole("navigation")
		.getByRole("link", { name: "Blog Posts" })
		.click();

	// Expects page to have a heading with the name of blog.
	await expect(page.getByRole("heading", { level: 1 })).toContainText(
		"Blog Posts",
	);
});

test("navigation to contact works", async ({ page }) => {
	await page.goto("/");

	// Click the Contact link.
	await page.getByRole("link", { name: "Contact" }).click();

	// Expects page to have a heading with the name of contact.
	await expect(page.getByRole("heading", { level: 1 })).toContainText(
		"Contact Us",
	);
});
