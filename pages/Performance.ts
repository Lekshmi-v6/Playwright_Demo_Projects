import {Page,expect} from '@playwright/test';

export class Performance{

private page:Page;

    constructor(page:Page){

        this.page=page;
    }

async PerformanceReview(){

    await this.page.getByRole('link', { name: 'Performance' }).click();
}
 async Configure(){
 const configureLink = this.page.getByText('Configure', { exact: true });
await configureLink.waitFor({ state: 'visible', timeout: 10000 });
await configureLink.click();
    
 }
async KPLs(){

  const kpi = this.page.getByRole('menuitem', { name: 'KPIs' });

  // Wait until visible
  await kpi.waitFor({ state: 'visible', timeout: 10000 });

  // Click
  await kpi.click();
  //await this.page.locator('.oxd-select-text').click();
 //const job= await this.page.getByRole('option', { name: 'QA Lead', exact: true }).click();
}
async kpiAdd(){
    await this.page.getByRole('button', {name: ' Add '}).click();
    await this.page.getByRole('textbox').nth(1).fill('Planning MethodologiesTest');
    await this.page.locator('.oxd-select-text').click();
    await this.page.getByRole('option', { name: 'QA Lead'}).click();
    await this.page.getByRole('textbox').nth(2).fill('10');
    await this.page.getByRole('textbox').nth(3).fill('80');
    await this.page.locator('.oxd-switch-input').click();
    await this.page.getByRole('button' ,{name: 'Save'}).click();
   
   
}
async KPISearch(){
    await this.page.getByRole('button', { name: 'Search' }).click();
    const Recordcount=await this.page.locator('.oxd-table-card').count();
    for(let i=0;i<Recordcount;i++){

        const KPindicator=this.page.locator('.oxd-table-card').nth(i);
        const kpcloumn= await KPindicator.locator('.oxd-table-cell').nth(1).textContent();
        console.log(kpcloumn);
       if (kpcloumn === 'Planning MethodologiesTest')
        {
        await KPindicator.locator('.oxd-icon.bi-pencil-fill').click();
           break; 
       }
  
    }
   
   
}
async kpiEdit(){
const minRate = await this.page.locator('.oxd-grid-4 .oxd-grid-item .oxd-input-group input').first();
await minRate.click();
await minRate.fill('5');
await this.page.locator('.oxd-switch-input').click();
await this.page.getByRole('button' ,{name: 'Save'}).click();

}
}