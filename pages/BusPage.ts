import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BusPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private krishTravels = this.page
        .locator("li[role='button']")
        .filter({
            hasText: "dKrish Travels"
        })
        .first();

    private highlights = this.krishTravels.getByText(
        "Highlights",
        { exact: true }
    );

    async verifyBusDetailsOpened() {

        await expect(this.highlights)
            .toBeVisible();

    }

}
