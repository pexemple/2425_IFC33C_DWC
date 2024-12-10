function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(mmarca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

var ford = new Marca("FORD");
var citroen = new Marca("CITROEN");
var seat = new Marca("SEAT");


var ffocus = new Modelo (ford,"Focus");
var fiesta = new Modelo (ford,"Fiesta")
var saxo = new Modelo(citroen,"Saxo");
var c4 = new Modelo (citroen,"C4");


var coches = [ffocus, fiesta, saxo, c4];
console.log(coches);

// var div = document.getElementByID("app");
var div = document.querySelector("body div:first-child");
var div = document.querySelector("#app");

//crear tabla
var table = document.createElement("TABLE");
table.id= "coches";

var thead = document.createElement("thead");
table.appendChild(thead);
var tr = document.createElement("tr");
thead.appendChild(tr);

var cabecera = ["MARCA","MODELO"];
var th;
for (let cabecera of cabeceras) {
    var th = document.createElement("th");
th.innerText = cabecera;
tr.appendChild(th);
}

/* var th = document.createElement("th");
th.innerText = "MARCA";
tr.appendChild(th);

var th = document.createElement("th");
th.innerText = "MODELO";
tr.appendChild(th);

var tbody = document.createElement("tbody");
table.appendChild("tbody"); */


for(var i = 0; i < coches.length; i++){
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    /*
    for (let propiedad in coches){
        td = document.createElement("td");
        if (typeof coches[i][propiedad] === 'string'){
            td.innerText = coches[i][propiedad];
        }
        else {
            td.innerText = coches[i][propiedad].nombre
        }
        tr.appendChild(td);
    }
    */

    /*for (propiedad === "marca"){
        td.innerText = coches[i][propiedad]
    }*/
} 

div.appendChild(table);

table.style.backgroundColor = "Yellow";


console.log(table);
