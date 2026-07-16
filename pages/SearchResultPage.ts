import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private krishTravels = this.page
        .locator("li[role='button']")
        .filter({
            hasText: "Krish Travels"
        })
        .first();

    async verifySearchPage() {

        await expect(this.page)
            .toHaveURL(
                /bus-tickets\/thiruvananthapuram-to-coimbatore/
            );

    }

    async openKrishTravels() {

        await this.visible(this.krishTravels);

        await this.krishTravels.click({
            force: true
        });

    }

}