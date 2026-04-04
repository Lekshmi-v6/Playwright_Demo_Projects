import {test,expect} from '../fixture/Testdataorange';
import {orangeLogin} from '../pages/orangeLogin';
import { Performance } from "../pages/Performance";
let performance :Performance;

test('Perfomance Module',async ({page,testData})=>{
    const orangelogin= new orangeLogin(page);
    await orangelogin.goto();

    await orangelogin.Login(testData.validUser.username,testData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);

     performance = new Performance(page);
    await performance.PerformanceReview();
     await expect(page).toHaveURL(/performance/);
     
     await performance.Configure();
     await performance.KPLs();
     await performance.kpiAdd();
     await performance.KPISearch();
     await performance.kpiEdit();
     await performance.kpidelete();
    await page.pause();
    
});
