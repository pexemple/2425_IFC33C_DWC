const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

const listaContainer = document.getElementById("container");

const lista = document.createElement("ul");

for (let i = 0; i < nombres.length; i++) {
    let item = document.createElement("li");
    item.textContent = nombres[i];
    lista.appendChild(item);
}

listaContainer.appendChild(lista);
