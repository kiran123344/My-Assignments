import { test } from '@playwright/test';
test ('Leaftaps login', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.getbyrole('textbox', {name: "Username" }).fill('DemoSalesManager');
  await page.getbyrole('textbox', {name: "Password" }).fill('crmsfa');
  await page.locator('//input[@value="Login"]').click();
  await page.getbyrole('link').filter({hastext: "CRM/SFA"}).click();
})