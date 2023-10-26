import {fetchPersonData} from "./personApi.js";
import {createPersonDataTable} from "./domUtil.js";

const displayPersonData = async () => {
        const data = await fetchPersonData();
        createPersonDataTable(data);
};

displayPersonData()
