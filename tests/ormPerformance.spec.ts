import {test,expect} from '../fixture/Testdataorange';
import { Performance } from "../pages/Performance";
let performance :Performance;

test('Perfomance Module',async ({page})=>{
     performance = new Performance(page);
    await performance.PerformanceReview.click();
    


});