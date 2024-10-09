import { test, expect, chromium } from '@playwright/test';

test('has title', async () => {

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const page = await browser.newPage();
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});
