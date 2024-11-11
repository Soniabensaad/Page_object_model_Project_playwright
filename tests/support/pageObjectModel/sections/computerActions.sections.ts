import { Page } from "@playwright/test";

export default class ComputerActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    createComputerButton = () => this.page.getByText("Create this computer");

    // Actions
    public async clickCreateComputer() {
        await this.createComputerButton().click();
    }
}
