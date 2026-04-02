
import { test,expect } from '../fixture/Testdatafixtures';
import { Loginpage } from '../pages/Loginpage';

let loginPage: Loginpage; 

test.beforeEach(async ({ page }) => {
   loginPage = new Loginpage(page);
  await loginPage.goto();
});

test('Login', async ({ page ,testData }) => {

  // Use fixture data
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  // Assertion
  await expect(loginPage.verifyLoginSuccess).toBeVisible();
  });

  test('Invalid Login', async ({testData }) => {

  // Use fixture data
  await loginPage.login(
    testData.invalidUser.username,
    testData.invalidUser.password
  );
  // Assertion
  await expect(loginPage.verifyInvalidError).toHaveText('Epic sadface: Username and password do not match any user in this service');
 
  
});
test('Empty', async ({ page ,testData }) => {

  // Use fixture data
  await loginPage.login(
    testData.emptyUser.username,
    testData.emptyUser.password
  );
   await expect(loginPage.verifyInvalidError).toHaveText('Epic sadface: Username is required');
 
});

