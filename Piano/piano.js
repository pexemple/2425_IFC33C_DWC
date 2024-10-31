let partitures = [
    {titulo: 'La Balanguera', notes: ['DO', 'RE', 'MI', 'FA', 'FA', 'SOL', 'SOL', 'LA#', 'LA#']},
    {titulo: 'Happy Birthday', notes: ['DO', 'DO', 'RE', 'DO', 'FA', 'MI', 'DO', 'DO', 'RE', 'DO', 'SOL', 'FA']}
];


function Nota(nombre) {
    this.nombre = nombre;
}

var cerca = [];

function addCerca(notas) {
    cerca = []; 
    for (let nota of notas) {
        let nuevaNota = new Nota(nota); 
        cerca.push(nuevaNota);
    }
}

function comparaNotas(nota1, nota2) {
    return nota1.nombre === nota2.nombre;
}

function cercador() {
    for (var i = 0; i < partitures.length; i++) {
        let partitura = partitures[i];
        let encontrado = false;

        for (var j = 0; j <= partitura.notes.length - cerca.length; j++) {
            let match = true;

            for (var k = 0; k < cerca.length; k++) {
                let notaPartitura = new Nota(partitura.notes[j + k]);

                if (!comparaNotas(cerca[k], notaPartitura)) {
                    match = false;
                    break;
                }
            }

            if (match) {
                encontrado = true;
                break;
            }
        }

        if (encontrado) {
            console.log(`${partitura.titulo}`);
        }
    }
}

addCerca(['DO','RE']);

cercador();

