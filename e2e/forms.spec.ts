import { expect, test } from "@playwright/test";

test.describe("Contact form", () => {
  test("renders all required fields and submit button", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("#first-name")).toBeVisible();
    await expect(page.locator("#last-name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#message")).toBeVisible();
    await expect(page.locator("#submit-btn")).toBeVisible();
  });

  test("feedback message becomes visible after submission", async ({ page }) => {
    // Mock the contact form submission API
    await page.route("**/ht-contact-api**", (route) => {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          ok: true,
          message: "Thank you! Your message has been sent successfully.",
        }),
      });
    });

    await page.goto("/contact");

    await page.fill("#first-name", "Test");
    await page.fill("#last-name", "User");
    await page.fill("#email", "test@example.com");
    await page.fill("#message", "This is an automated test message.");

    const submitBtn = page.locator("#submit-btn");

    // Ensure the button is in view and wait for potential animations
    await submitBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
    await submitBtn.click();

    await expect(page.locator("#form-message")).toBeVisible({ timeout: 5000 });
  });

  test("required fields enforce HTML5 validation before submission", async ({ page }) => {
    await page.goto("/contact");

    await page.click("#submit-btn");

    // Browser validation prevents submission — form-message should remain hidden
    await expect(page.locator("#form-message")).toBeHidden();
  });
});
