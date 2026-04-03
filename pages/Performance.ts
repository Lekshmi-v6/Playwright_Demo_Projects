import {Page,expect} from '@playwright/test';

export class Performance{

private page:Page;

    constructor(page:Page){

        this.page=page;
    }

get PerformanceReview(){

    return this.page.getByRole('link', { name: 'Performance' });

}
}