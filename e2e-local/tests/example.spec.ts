import { test, expect, chromium } from '@playwright/test';

test.describe('Login', () => {
  test('has title', async () => {

    const browser = await chromium.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:4200/product-index');

    // h1-title
    //getElementsByTagName('h1')[0].textContent
    // CSS-Selector: h1 oder #product-linkt
    const h1Content = await page.textContent('h1');
    expect(h1Content).toBe('Login');

    // Login
    // Text-basierter Zugriff auf ein Element
    await page.click('text="Submit"');

    await expect(page.locator('h2')).toContainText('Welcome');

    await page.click('text="Customers"');
    await expect(page.locator('h1')).toContainText('Customer Dashboard');
    await page.click('text="New"');
    await expect(page.locator('h2')).toContainText('New Customer');
    await page.getByLabel('Name:').fill('Max Mustermann');
    await page.getByLabel('Credit:').fill('99');

    await page.route('http://localhost:3002/customers/', route => {
      const method = route.request().method();
      if (method === 'POST') {
        route.fulfill({
          status: 201,
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            id: 1,
            name: 'Max Mustermann',
            credit: 99,
          }),
        });
      }
    });


    await page.click('text="Create Customer"');
    await expect(page.locator('h2')).toContainText('List of Customers');


  });

});