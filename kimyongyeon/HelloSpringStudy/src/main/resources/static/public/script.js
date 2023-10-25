const container = document.querySelector(".container"),
    personTable = container.querySelector(".personTable");

const URLPATH = "/list";

const displayPersonData = async () => {
    const data = await fetchPersonData();
    data.list.forEach((item, index) => {
        const { name, age, address } = item;
        personTable.appendChild(createTableRow(name, age, address, index));
    });
};

const createTableRow = (name, age, address, index) => {
    const tr = document.createElement("tr");
    tr.appendChild(createTableCell(index));
    tr.appendChild(createTableCell(name));
    tr.appendChild(createTableCell(age));
    tr.appendChild(createTableCell(address));
    return tr;
};

const createTableCell = (text) => {
    const td = document.createElement("td");
    td.innerText = text;
    return td;
};

const handleStatus = (status) => {
    if (status >= 400 && status < 500) {
        throw new Error("Bad request");
    }
    if (status > 500) {
        throw new Error("server error");
    }
};

const fetchPersonData = async () => {
    try {
        const response = await fetch(URLPATH);
        handleStatus(response.status);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("An error occured", error);
    }
};

displayPersonData();
