import { test } from "../fixtures/pageFixture";
import "../hooks/Hooks";

test(

    "Search Bus",

    async ({

        searchFlow

    }) => {

        await searchFlow.searchBus();

    }

);