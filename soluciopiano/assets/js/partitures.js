let tableContainer = document.getElementById('table-container');

tableContainer.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Títol</th>
                <th>Idioma Original</th>
                <th>Accions</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
`;

let tableBody = document.getElementById('table-body');

let partitures = [
    { titol: 'La Balanguera', idioma: 'ca' },
    { titol: 'Merry Christmas', idioma: 'en' },
    { titol: 'Frère Jacques', idioma: 'fr' },
    { titol: 'Sant Antoni i el Dimoni', idioma: 'ca' }
];

for (let i = 0; i < partitures.length; i++) {
    const row = document.createElement('tr');

    const cellTitol = document.createElement('td');
    cellTitol.textContent = partitures[i].titol;
    row.appendChild(cellTitol);

    const cellIdioma = document.createElement('td');
    cellIdioma.textContent = partitures[i].idioma;
    row.appendChild(cellIdioma);

    const cellAccions = document.createElement('td');
    cellAccions.className = 'actions';

    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fas fa-edit"></i> Editar';
    btnEditar.onclick = () => alert('Editar: ' + partitures[i].titol);
    cellAccions.appendChild(btnEditar);

    const btnEliminar = document.createElement('button');
    btnEliminar.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
    btnEliminar.onclick = () => { 
        if (confirm(`Estas segur que vols esborrar ${partitures[i].titol}?`)) { 
            alert("Element Esborrat"); 
            row.remove(); 
        } else {
            alert("Has cancel·lat l'acció"); 
        }
    };
    cellAccions.appendChild(btnEliminar);

    row.appendChild(cellAccions);

    tableBody.appendChild(row);
}

for (let i = 0; i < 100; i++) {
    const row = document.createElement('tr');

    const cellTitol = document.createElement('td');
    cellTitol.textContent = partitures[3].titol;
    row.appendChild(cellTitol);

    const cellIdioma = document.createElement('td');
    cellIdioma.textContent = partitures[3].idioma;
    row.appendChild(cellIdioma);

    const cellAccions = document.createElement('td');
    cellAccions.className = 'actions';

    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = '<i class="fas fa-edit"></i> Editar';
    btnEditar.onclick = () => alert('Editar: ' + partitures[3].titol);
    cellAccions.appendChild(btnEditar);

    const btnEliminar = document.createElement('button');
    btnEliminar.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
    btnEliminar.onclick = () => { 
        if (confirm(`Estas segur que vols esborrar ${partitures[3].titol}?`)) { 
            alert("Element Esborrat"); 
            row.remove(); 
        } else {
            alert("Has cancel·lat l'acció"); 
        }
    };
    cellAccions.appendChild(btnEliminar);

    row.appendChild(cellAccions);

    tableBody.appendChild(row);
}

const obrir = document.getElementById("obrir");

obrir.addEventListener("click", () => {
    let popupWindow = window.open("", "Login", "width= 380,height=480,scrollbars=no,resizable=no");

    popupWindow.document.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="assets/css/partitures.css">
            <title>Login</title>
        </head>
        <body>
            <div class="popup-window">
                <h2>Score Finder - Login</h2>
                <form id="loginForm">
                    <div>
                        <label for="email">Correu Electrònic</label>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label for="contra">Password</label>
                        <input type="password" name="contra" id="contra" required>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </body>
        </html>
    `);

    popupWindow.document.getElementById('loginForm').onsubmit = (e) => {
        e.preventDefault();
        // Lógica de login aquí
        alert("Login exitoso");
        popupWindow.close();
    };
});


/*const obrir = document.getElementById("obrir")
const  menu = document.getElementById("menu")
const  entrar = document.getElementById("Entrar")


obrir.addEventListener("click", () => {menu.showModal();})
entrar.addEventListener("click", () => {menu.close();})*/


