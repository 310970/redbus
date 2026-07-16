import { test as base } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { BusPage } from "../pages/BusPage";
import { SearchFlow } from "../flows/SearchFlow";

type MyFixtures = {

    homePage: HomePage;

    searchResultPage: SearchResultPage;

    busPage: BusPage;

    searchFlow: SearchFlow;

};

export const test = base.extend<MyFixtures>({

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));

    },

    searchResultPage: async ({ page }, use) => {

        await use(new SearchResultPage(page));

    },

    busPage: async ({ page }, use) => {

        await use(new BusPage(page));

    },

    searchFlow: async (

        {

            homePage,

            searchResultPage,

            busPage

        },

        use

    ) => {

        await use(

            new SearchFlow(

                homePage,

                searchResultPage,

                busPage

            )

        );

    }

});

export { expect } from "@playwright/test";