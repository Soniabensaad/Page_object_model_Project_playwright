import { test, expect } from '@playwright/test';
import ComputersPage from './support/pageObjectModel/pages/computers.pages';
import AddComputerPage from './support/pageObjectModel/pages/addComputer';

test('Basic Tests', async ({ page }) => {
  await page.goto("https://computer-database.gatling.io/computers");

  // Click on "Add a new computer" button
  await page.getByText("Add a new computer").click();

  // Fill out form fields
  await page.locator('#name').fill("CommitQuality");
  await page.locator('#introduced').fill("1999-11-11");
  await page.locator('#discontinued').fill("2000-11-11");

  // Use selectOption method correctly with parentheses
  await page.locator('#company').selectOption({ label: "Apple Inc." });

  // Click on "Create this computer" button
  await page.getByText('Create this computer').click();

  // Verify success message
  await expect(page.getByText('Done ! Computer CommitQuality has been created')).toBeVisible();
});

test('Basic Test POM', async ({ page }) => {
  const computersPage = new ComputersPage(page);
  const addComputerPage = new AddComputerPage(page);

  await computersPage.goto();
  await computersPage.clickCreateComputer();
  await addComputerPage.addComputer();
  await computersPage.assertComputerAdded();
});
