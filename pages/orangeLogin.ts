import { Page,expect } from "@playwright/test";

export class orangeLogin{
    private page: Page;
 constructor (page:Page){
this.page= page;
 }
 get InvalidloginError(){
    return this.page.locator('.oxd-alert-content.oxd-alert-content--error');

 }
  get usernameError() {
 
  return this.page.locator('div.oxd-input-group:has(input[name="username"]) .oxd-input-group__message')
  
}

get passwordError() {
   return this.page.locator('div.oxd-input-group:has(input[name="password"]) .oxd-input-group__message')
  
}
 async goto()
 {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 }
 async Login(username : string,password : string){
    await this.page.fill('[name="username"]', username);
    await this.page.fill('[name="password"]', password);
    await this.page.click('[type=submit]');
 }
 

}