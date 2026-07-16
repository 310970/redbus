import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { BusPage } from "../pages/BusPage";
import { SearchData } from "../test-data/SearchData";

export class SearchFlow {

    constructor(

        private home: HomePage,

        private result: SearchResultPage,

        private bus: BusPage

    ) {}

    async searchBus() {

        await this.home.open();

        await this.home.selectFromCity(
            SearchData.FROM_CITY
        );

        await this.home.selectToCity(
            SearchData.TO_CITY
        );

        await this.home.selectJourneyDate(
            SearchData.JOURNEY_DATE
        );

        await this.home.clickSearch();

        await this.result.verifySearchPage();

        await this.result.openKrishTravels();

        await this.bus.verifyBusDetailsOpened();

    }

}