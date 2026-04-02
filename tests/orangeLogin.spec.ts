import { test, expect } from "@playwright/test";
import { orangeLogin } from '../pages/orangeLogin';

let orangelogin: orangeLogin; 

test.beforeEach(async({page})=>{
    orangelogin= new orangeLogin(page);
     await orangelogin.goto();
});

test("Login Test",async({page})=>{

    await orangelogin.Login('Admin','admin123');
    await expect(page).toHaveURL(/dashboard/);

});
test("InvalidLogin Test",async({page})=>{

    await orangelogin.Login('Admin','admin1243')
    await expect(orangelogin.InvalidloginError).toHaveText('Invalid credentials');;
});
test("EmptyLogin Test",async({page})=>{

    await orangelogin.Login('','')
     await expect(orangelogin.usernameError).toHaveText('Required');
    await expect(orangelogin.passwordError).toHaveText('Required');
   
});