import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect h1 to contain a substring.
  expect(page.getByText('Hooraye!')).toBeTruthy();
});
