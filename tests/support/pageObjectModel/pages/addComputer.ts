import { expect, Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.sections";
import ComputerDetails from "../sections/computerDetails.sections";

export default class AddComputerPage {
    page: Page;
    ComputerActions: ComputerActions;
    ComputerDetails: ComputerDetails;

    constructor(page: Page) {
        this.page = page;
        this.ComputerActions = new ComputerActions(this.page);
        this.ComputerDetails = new ComputerDetails(this.page);
    }

    public async goto() {
        await this.page.goto("https://computer-database.gatling.io/computers/new");
    }

    public async addComputer() {
        await this.ComputerDetails.enterComputerDetails();
        await this.ComputerActions.clickCreateComputer();
    }
}
