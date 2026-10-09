import { expect, test } from "@playwright/test";

test.describe("Keyboard and screen reader navigation", () => {
  test("the About Us submenu opens for keyboard users", async ({ page, isMobile }) => {
    test.skip(isMobile, "the desktop navigation is hidden on phones");
    await page.goto("/");

    const about = page.locator('nav[aria-label="Main navigation"] li.group');
    const submenu = about.locator("ul");
    await expect(submenu).toBeHidden();

    await about.locator("> a").focus();
    await expect(submenu).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(submenu.locator("a").first()).toBeFocused();
  });

  test("the mobile menu moves focus in, closes on Escape and gives focus back", async ({ page, isMobile }) => {
    test.skip(!isMobile, "the menu button only shows on phones");
    await page.goto("/");

    const open = page.locator("#mobile-menu-open");
    await expect(open).toHaveAttribute("aria-expanded", "false");
    await open.click();
    await expect(open).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mobile-menu-close")).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(open).toHaveAttribute("aria-expanded", "false");
    await expect(open).toBeFocused();
    await expect(page.locator("#mobile-menu")).toHaveAttribute("inert", "");
  });

  test("the theme toggle reports its state", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("theme", "light"));
    await page.goto("/");

    const toggle = page.locator(".theme-toggle-btn");
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveClass(/dark/);
  });
});

test.describe("Without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("content revealed on scroll is visible", async ({ page }) => {
    await page.goto("/");
    const first = page.locator(".scroll-reveal").first();
    await expect(first).toBeVisible();
    expect(await first.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  });
});
