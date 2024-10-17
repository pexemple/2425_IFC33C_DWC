
let jsonObj = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};
console.log("---------------------------------------------" + jsonObj.squadName.toUpperCase() + "-------------------------------------------");
console.log("---------------------------------" + "Ciudad de orgien:" + " " + jsonObj.homeTown + " // " + "Fecha origen:" + jsonObj.formed + "----------------------");



for (members of jsonObj.members) {
    let nombre = "El nombre es: " + members.name;
    let edad = "la edad es: " + members.age;
    let identidad = "La identidad secreta es: " + members.secretIdentity;
    let poderes = "el poder es: " + members.powers.join(", ");
    let separador = "------------------------------------------------"

    let resultat = nombre + "\n" + edad + "\n" + identidad + "\n" + poderes + "\n" + separador;
    console.log(resultat);

}

/*--------------------------------------EJERCICIO 3---------------------------------------------*/

console.log("--------------------------------------EJERCICIO 3---------------------------------------------");

let p1 = ("AMOR")
let p2 = ("mora")



let prova = p1.split('').sort().join('').toLocaleLowerCase();
let prova2 = p2.split('').sort().join('').toLowerCase();


if (prova === prova2) {
    console.log("Es verdadero");
}

else {
    console.log("no lo es");

}

