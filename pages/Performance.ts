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
await kpi.waitFor({ state: 'visible', timeout: 60000 });
  // Click
await kpi.click();
 }
async kpiAdd(){
    await this.page.getByRole('button', {name: ' Add '}).click();
  await this.page.getByRole('textbox').nth(1).fill('Test Planning2');
    await this.page.locator('.oxd-select-text').click();
    await this.page.getByRole('option', { name: 'Account Assistant'}).click();
    await this.page.getByRole('textbox').nth(2).fill('5');
    await this.page.getByRole('textbox').nth(3).fill('80');
    await this.page.locator('.oxd-switch-input').click();
    await this.page.getByRole('button' ,{name: 'Save'}).click();
    
}
async KPISearch(){
    await this.page.locator('.oxd-select-text').click();
 const job = this.page.getByRole('option', { name: 'Account Assistant'});
await expect(job).toBeVisible();
await job.click();
    await this.page.getByRole('button', { name: 'Search' }).click();
   const Recordcount=await this.page.locator('.oxd-table-card').count();
  
    for(let i=0;i<Recordcount;i++){

        const KPindicator=this.page.locator('.oxd-table-card').nth(i);
        const kpcloumn= await KPindicator.locator('.oxd-table-cell').nth(1).textContent();
  
       if (kpcloumn?.includes('Test Planning2'))
        {
        await KPindicator.locator('.oxd-icon.bi-pencil-fill').click();
        await expect(this.page.getByRole('button', { name: 'Save' })).toBeVisible();
       
        break; 
       }
  
    }
   
   
}
async kpiEdit(){

   const minRate =this.page.locator('.oxd-input-group .oxd-input').nth(1);
await minRate.click();
await minRate.fill('10');

  await this.page.locator('.oxd-switch-input').click();
  await this.page.getByRole('button', { name: 'Save' }).click();
 
}
 async kpidelete(){
 const row = this.page.locator('.oxd-table-card').filter({ hasText: 'Test Planning2' });

  await row.locator('button').nth(1).click();

  const confirmBtn = this.page.getByRole('button', { name: 'Yes, Delete' });
  await expect(confirmBtn).toBeVisible();
  await confirmBtn.click();

  await expect(row).toHaveCount(0);

}
}
