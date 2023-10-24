const item1 = document.querySelector(".item1"),
    table = item1.querySelector("table");

console.log(item1);
const getPersonList = async () => {
    const persons = await fetch("http://localhost:9000/list")
        .then((res) => res.json())
        .then((msg) => msg.list);
    console.log(persons);
    persons.map((items, index) => console.log(items.name, items.age, items.address, index));
    persons.map((items, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td1.innerText = items.name;
        td2.innerText = items.age;
        td3.innerText = items.address;
        td4.innerText = index;
        tr.appendChild(td4);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        console.log(tr);
        table.appendChild(tr);
    });
};

getPersonList();