import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('accessibility', () => { 
  test('home page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('about page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/about'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('contact page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/contact'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
