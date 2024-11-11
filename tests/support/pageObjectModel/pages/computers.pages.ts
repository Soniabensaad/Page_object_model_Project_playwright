import { expect, Page } from "@playwright/test";

export default class ComputersPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to the computers page
    public async goto() {
        await this.page.goto("https://computer-database.gatling.io/computers");
    }

    // Locators
    addComputerButton = () => this.page.getByText("Add a new computer");
    computerAddedLabel = () => this.page.locator("text=Done ! Computer CommitQuality has been created");

    // Actions
    public async clickCreateComputer() {
        await this.addComputerButton().click();
    }

    public async assertComputerAdded() {
        // Increased timeout to 15000ms to allow for any delay
        await expect(this.computerAddedLabel()).toBeVisible({ timeout: 15000 });
    }
}
