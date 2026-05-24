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
    // Mock the contact form submission API more broadly to ensure it's caught
    await page.route("**", (route) => {
      if (route.request().method() === "POST") {
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            message: "Thank you! Your message has been sent successfully.",
          }),
        });
      }
      return route.continue();
    });

    await page.goto("/contact");

    // Wait for the form script to be initialized (Astro script hydration)
    const form = page.locator("#contact-form");
    await expect(form).toHaveAttribute("data-initialized", "true", { timeout: 10000 });

    await page.fill("#first-name", "Test");
    await page.fill("#last-name", "User");
    await page.fill("#email", "test@example.com");
    await page.fill("#message", "This is an automated test message.");

    const submitBtn = page.locator("#submit-btn");

    // Ensure the button is ready
    await submitBtn.scrollIntoViewIfNeeded();

    // Set up request/response listeners before clicking
    const requestPromise = page.waitForRequest((request) => request.method() === "POST");
    const responsePromise = page.waitForResponse(
      (response) => response.request().method() === "POST" && response.status() === 200,
    );

    // Click and wait for the network activity
    await submitBtn.click();

    await requestPromise;
    await responsePromise;

    // Wait for the success message to appear in the UI
    await expect(page.locator("#form-message")).toBeVisible({ timeout: 10000 });
    await expect(page.locator("#form-message")).toContainText(/successfully/i);
  });

  test("required fields enforce HTML5 validation before submission", async ({ page }) => {
    await page.goto("/contact");

    await page.click("#submit-btn");

    // Browser validation prevents submission — form-message should remain hidden
    await expect(page.locator("#form-message")).toBeHidden();
  });
});
