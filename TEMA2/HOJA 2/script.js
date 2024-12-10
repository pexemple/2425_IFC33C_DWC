function multiplicador() {
    let table = document.createElement("table");

    let headerRow = document.createElement("tr");
    let espacio = document.createElement("th");
    headerRow.appendChild(espacio)

    for (let i = 1; i <= 10; i++) {
        let header = document.createElement("th");
        header.textContent = i;
        headerRow.appendChild(header);
    }
    table.appendChild(headerRow);

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");

        let Rowheader = document.createElement("th")
        Rowheader.textContent = i;
        row.appendChild(Rowheader)

        for (let j = 1; j <= 10; j++) {
            let cell =  document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    let cont = document.getElementById("multiplicacio")
    cont.appendChild(table)
}

multiplicador()