import { test as base, expect } from '@playwright/test';
import { getExcelData } from '../utils/excelReader';

type TestDataType = {
  testData: {
    validUser: { username: string; password: string };
    invalidUser: { username: string; password: string };
    emptyUser: { username: string; password: string };
  };
};

export const test = base.extend<TestDataType>({
  testData: async ({}, use) => {

    const excelData: any = getExcelData('testdata.xlsx', 'Sheet1');

    // Map Excel rows → your test structure
    const formattedData = {
      validUser: excelData[0],
      invalidUser: excelData[1],
      emptyUser: excelData[2],
    };

    await use(formattedData);
  },
});

export { expect };