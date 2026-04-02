import { Page,expect } from "@playwright/test";

export class Loginpage{
    
    private page: Page;

    constructor(page: Page ){
        this.page = page;

    }
   async goto(){
         await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  get verifyLoginSuccess() {
   return this.page.locator('.inventory_list');
  }
  get verifyInvalidError(){
    return this.page.locator('[data-test="error"]');
  }
}