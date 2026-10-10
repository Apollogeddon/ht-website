import { expect, type Page, test } from "@playwright/test";

const WEB3FORMS = "https://api.web3forms.com/submit";
// playwright.config.ts builds the site with this key
const TEST_KEY = "e2e-test-key";

const fillForm = async (page: Page) => {
  await page.fill("#first-name", "Test");
  await page.fill("#last-name", "User");
  await page.fill("#email", "test@example.com");
  await page.fill("#message", "This is an automated test message.");
};

const openContact = async (page: Page) => {
  await page.goto("/contact");
  // the submit handler is attached once the page script has run
  await expect(page.locator("#contact-form")).toHaveAttribute("data-initialized", "true", { timeout: 10000 });
};

test.describe("Contact form", () => {
  test("renders all required fields and submit button", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("#first-name")).toBeVisible();
    await expect(page.locator("#last-name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#message")).toBeVisible();
    await expect(page.locator("#submit-btn")).toBeEnabled();
  });

  test("sends the message to Web3Forms and replaces the form with a thank-you", async ({ page }) => {
    await page.route(WEB3FORMS, (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) }),
    );
    await openContact(page);
    await fillForm(page);

    const requestPromise = page.waitForRequest(WEB3FORMS);
    await page.click("#submit-btn");
    const request = await requestPromise;

    expect(request.method()).toBe("POST");
    expect(request.postDataJSON()).toMatchObject({
      access_key: TEST_KEY,
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      message: "This is an automated test message.",
    });

    await expect(page.locator("#form-success")).toBeVisible();
    await expect(page.locator("#form-success")).toBeFocused();
    await expect(page.locator("#contact-form")).toBeHidden();
  });

  test("shows a plain error and keeps the message when sending fails", async ({ page }) => {
    await page.route(WEB3FORMS, (route) => route.fulfill({ status: 500, body: "not json" }));
    await openContact(page);
    await fillForm(page);

    await page.click("#submit-btn");

    const error = page.locator("#form-message");
    await expect(error).toBeVisible();
    await expect(error).toHaveAttribute("role", "alert");
    await expect(error).toContainText(/couldn't be sent/);
    await expect(page.locator("#message")).toHaveValue("This is an automated test message.");
    await expect(page.locator("#submit-btn")).toBeEnabled();
  });

  test("an empty form is not sent and its fields are marked invalid", async ({ page }) => {
    let sent = false;
    await page.route(WEB3FORMS, (route) => {
      sent = true;
      return route.abort();
    });
    await openContact(page);

    await page.click("#submit-btn");

    expect(await page.locator("#first-name").evaluate((el: HTMLInputElement) => el.validity.valueMissing)).toBe(true);
    await expect(page.locator("#first-name-error")).toBeVisible();
    await expect(page.locator("#contact-form")).toBeVisible();
    expect(sent).toBe(false);
  });
});

test.describe("Contact form without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("posts to Web3Forms instead of putting the message in the URL", async ({ page }) => {
    await page.goto("/contact");

    const form = page.locator("#contact-form");
    await expect(form).toHaveAttribute("action", WEB3FORMS);
    await expect(form).toHaveAttribute("method", "POST");
    await expect(form.locator('input[name="access_key"]')).toHaveValue(TEST_KEY);
  });
});
