import { test, expect } from '@playwright/test';
import { getExcelData } from '../utils/excelReader';

const testData = getExcelData('test-data/testdata.xlsx', 'Sheet1');

test.describe('Login Tests with Excel Data', () => {

    for (const data of testData as any[]) {

       test(`Login with ${data.username}`, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);

    await page.click('button[type="submit"]');

   const errorMsg = page.locator('.oxd-alert-content-text');

if (data.expected === 'pass') {
    await expect(page).toHaveURL(/dashboard/);
} else {
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Invalid credentials');
}   
});
}   
});