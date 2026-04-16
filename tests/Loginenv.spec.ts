import { test, expect } from '../fixture/auth.fixture';

test('Dashboard should load', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/dashboard/);
});

test('Check menu visibility', async ({ loggedInPage }) => {
  await expect(
    loggedInPage.getByRole('link', { name: 'Admin' })
  ).toBeVisible();
});