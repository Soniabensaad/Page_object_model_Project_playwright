import { Page } from "@playwright/test";

export default class ComputerDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    nameTexBox = () => this.page.locator("#name");
    introduceTexBox = () => this.page.locator('#introduced');
    discontinueTexBox = () => this.page.locator('#discontinued');
    companySelect = () => this.page.locator('#company');

    // Actions
    public async enterComputerDetails() {
        await this.nameTexBox().fill('CommitQuality'); 
        await this.introduceTexBox().fill("1999-11-11");
        await this.discontinueTexBox().fill('2000-11-11');
        await this.companySelect().selectOption({ label: "Apple Inc." });
    }
}
