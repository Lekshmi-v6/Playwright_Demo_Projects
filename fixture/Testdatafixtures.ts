import { test as base, expect } from '@playwright/test';

type TestData = {
  validUser: {
    username: string;
    password: string;
  };
  invalidUser: {
    username: string;
    password: string;
  };
  emptyUser: {
    username: string;
    password: string;
  };
};

export const test = base.extend<{
  testData: TestData;
}>({
  testData: async ({}, use) => {
    await use({
      validUser: {
        username: 'standard_user',
        password: 'secret_sauce'
      },
      invalidUser: {
        username: 'wrong_user',
        password: 'wrong_pass'
      },
      emptyUser: {
        username: '',
        password: ''
      }
    });
  },
});

export { expect };