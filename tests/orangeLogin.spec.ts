
import { orangeLogin } from '../pages/orangeLogin';
import {test,expect} from '../fixture/Testdataorange';
import { getExcelData } from '../utils/excelReader';

let orangelogin: orangeLogin; 

test.beforeEach(async({page})=>{
    orangelogin= new orangeLogin(page);
     await orangelogin.goto();
});

test("Login Test",async({page,testData})=>{

    await orangelogin.Login(testData.validUser.username,testData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);

});
test("InvalidLogin Test",async({page,testData})=>{

    await orangelogin.Login(testData.invalidUser.username,testData.invalidUser.password)
    await expect(orangelogin.InvalidloginError).toHaveText('Invalid credentials');;
});
test("EmptyLogin Test",async({page,testData})=>{

    await orangelogin.Login(testData.emptyUser.username,testData.emptyUser.password)
     await expect(orangelogin.usernameError).toHaveText('Required');
    await expect(orangelogin.passwordError).toHaveText('Required');
   
});