import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Constants } from "../utils/Constants";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private fromCity = this.page.getByRole("combobox", {
        name: "From"
    });

    private toCity = this.page.getByRole("combobox", {
        name: "To"
    });

    private datePicker = this.page.getByRole("dialog", {
        name: "Select date of journey"
    });

    private searchButton = this.page.getByRole("button", {
        name: "Search buses"
    });

    async open() {

        await this.page.goto(Constants.BASE_URL);

    }

    async selectFromCity(city: string) {

        await this.fromCity.focus();

        await this.fromCity.pressSequentially(city);

        await this.page
            .getByText(city, { exact: true })
            .click();

    }

    async selectToCity(city: string) {

        await this.toCity.focus();

        await this.toCity.pressSequentially(city);

        await this.page
            .getByText(city, { exact: true })
            .click();

    }

    async selectJourneyDate(date: string) {

        await this.datePicker.click();

        await this.page
            .getByRole("button", {
                name: new RegExp(date)
            })
            .click();

    }

    async clickSearch() {

        await this.searchButton.click();

    }

}