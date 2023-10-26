
export const createPersonDataTable = (data) =>{
    const container = document.querySelector(".container");
    const personTable= container.querySelector(".personTable");
    data.list.forEach((item, index) => {
        personTable.appendChild(createTableRow(item, index));
    });
}

// name, age, address, index 속성을 지닌 HTML 테이블 행을 만든다.
const createTableRow = (person, index) => {
    const tr = document.createElement("tr");
    tr.appendChild(createTableCell(index));
    tr.appendChild(createTableCell(person.name));
    tr.appendChild(createTableCell(person.age));
    tr.appendChild(createTableCell(person.address));
    return tr;
};

// text 값을 지닌 HTML 테이블 셀을 만든다.
const createTableCell = (text) => {
    const td = document.createElement("td");
    td.innerText = text;
    return td;
};
