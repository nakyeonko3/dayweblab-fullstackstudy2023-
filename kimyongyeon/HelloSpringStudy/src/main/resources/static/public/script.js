const container = document.querySelector(".container"),
    personTable = container.querySelector(".personTable");

const displayPersonData = async (response) => {
    const data = await response.json();
    data.list.forEach((item, indexVar) => {
        personTable.appendChild(createTableRow({ ...item, index: indexVar }));
    });
};

const createTableRow = (data) => {
    const { name, age, address, index } = data;
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

const fetchPersonData = async () => {
    try {
        const response = await fetch("/list");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        await displayPersonData(response);
    } catch (error) {
        console.log("An error occured", error);
    }
};

fetchPersonData();
