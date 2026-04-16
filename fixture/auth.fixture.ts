import { test as base, expect } from '@playwright/test';
import { Page } from '@playwright/test';

type AuthFixtures = {
  loggedInPage: any;
};

export const test = base.extend<AuthFixtures>({
  loggedInPage: async ({ page }: { page: Page }, use: (arg: Page) => Promise<void>) => {
    const username = process.env.OHR_USERNAME;
    const password = process.env.OHR_PASSWORD;

    if (!username || !password) {
      throw new Error('Missing ENV credentials');
    }

    // Navigate
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Validate login success (important!)
    await expect(page).toHaveURL(/dashboard/);

    // Provide logged-in page to tests
    await use(page);
  },
});

export { expect };