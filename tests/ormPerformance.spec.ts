import {test,expect} from '../fixture/Testdataorange';
import {orangeLogin} from '../pages/orangeLogin';
import { Performance } from "../pages/Performance";
let performance :Performance;

test('Perfomance Module',async ({page,testData})=>{
    const orangelogin= new orangeLogin(page);

    await test.step('User logs into the application', async () => {
    await orangelogin.goto();

    await orangelogin.Login(testData.validUser.username,testData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
    });

     performance = new Performance(page);
      await test.step('Navigate to Performance page', async () => {
    await performance.PerformanceReview();
     await expect(page).toHaveURL(/performance/);
      });

await test.step('Navigate to KPIS', async () => {
     await performance.Configure();
     await performance.KPLs();
});
        await test.step('Add,Search,Edit and Delete KPI', async () => {
     await performance.kpiAdd();
     await performance.KPISearch();
     await performance.kpiEdit();
     await performance.kpidelete();
       
        });
});
