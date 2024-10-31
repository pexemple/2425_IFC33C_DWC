let mazo = {
  clubs: {
    '2': { valor: '2', imagen: 'cards/2_of_clubs.png' },
    '3': { valor: '3', imagen: 'cards/3_of_clubs.png' },
    '4': { valor: '4', imagen: 'cards/4_of_clubs.png' },
    '5': { valor: '5', imagen: 'cards/5_of_clubs.png' },
    '6': { valor: '6', imagen: 'cards/6_of_clubs.png' },
    '7': { valor: '7', imagen: 'cards/7_of_clubs.png' },
    '8': { valor: '8', imagen: 'cards/8_of_clubs.png' },
    '9': { valor: '9', imagen: 'cards/9_of_clubs.png' },
    '10': { valor: '10', imagen: 'cards/10_of_clubs.png' },
    'jack': { valor: 'jack', imagen: 'cards/jack_of_clubs.png' },
    'queen': { valor: 'queen', imagen: 'cards/queen_of_clubs.png' },
    'king': { valor: 'king', imagen: 'cards/king_of_clubs.png' },
    'ace': { valor: 'ace', imagen: 'cards/ace_of_clubs.png' }
  },
  diamonds: {
    '2': { valor: '2', imagen: 'cards/2_of_diamonds.png' },
    '3': { valor: '3', imagen: 'cards/3_of_diamonds.png' },
    '4': { valor: '4', imagen: 'cards/4_of_diamonds.png' },
    '5': { valor: '5', imagen: 'cards/5_of_diamonds.png' },
    '6': { valor: '6', imagen: 'cards/6_of_diamonds.png' },
    '7': { valor: '7', imagen: 'cards/7_of_diamonds.png' },
    '8': { valor: '8', imagen: 'cards/8_of_diamonds.png' },
    '9': { valor: '9', imagen: 'cards/9_of_diamonds.png' },
    '10': { valor: '10', imagen: 'cards/10_of_diamonds.png' },
    'jack': { valor: 'jack', imagen: 'cards/jack_of_diamonds.png' },
    'queen': { valor: 'queen', imagen: 'cards/queen_of_diamonds.png' },
    'king': { valor: 'king', imagen: 'cards/king_of_diamonds.png' },
    'ace': { valor: 'ace', imagen: 'cards/ace_of_diamonds.png' }
  },
  hearts: {
    '2': { valor: '2', imagen: 'cards/2_of_hearts.png' },
    '3': { valor: '3', imagen: 'cards/3_of_hearts.png' },
    '4': { valor: '4', imagen: 'cards/4_of_hearts.png' },
    '5': { valor: '5', imagen: 'cards/5_of_hearts.png' },
    '6': { valor: '6', imagen: 'cards/6_of_hearts.png' },
    '7': { valor: '7', imagen: 'cards/7_of_hearts.png' },
    '8': { valor: '8', imagen: 'cards/8_of_hearts.png' },
    '9': { valor: '9', imagen: 'cards/9_of_hearts.png' },
    '10': { valor: '10', imagen: 'cards/10_of_hearts.png' },
    'jack': { valor: 'jack', imagen: 'cards/jack_of_hearts.png' },
    'queen': { valor: 'queen', imagen: 'cards/queen_of_hearts.png' },
    'king': { valor: 'king', imagen: 'cards/king_of_hearts.png' },
    'ace': { valor: 'ace', imagen: 'cards/ace_of_hearts.png' }
  },
  spades: {
    '2': { valor: '2', imagen: 'cards/2_of_spades.png' },
    '3': { valor: '3', imagen: 'cards/3_of_spades.png' },
    '4': { valor: '4', imagen: 'cards/4_of_spades.png' },
    '5': { valor: '5', imagen: 'cards/5_of_spades.png' },
    '6': { valor: '6', imagen: 'cards/6_of_spades.png' },
    '7': { valor: '7', imagen: 'cards/7_of_spades.png' },
    '8': { valor: '8', imagen: 'cards/8_of_spades.png' },
    '9': { valor: '9', imagen: 'cards/9_of_spades.png' },
    '10': { valor: '10', imagen: 'cards/10_of_spades.png' },
    'jack': { valor: 'jack', imagen: 'cards/jack_of_spades.png' },
    'queen': { valor: 'queen', imagen: 'cards/queen_of_spades.png' },
    'king': { valor: 'king', imagen: 'cards/king_of_spades.png' },
    'ace': { valor: 'ace', imagen: 'cards/ace_of_spades.png' }
  }
};

function baraja(mazo) {
  let cartasSeleccionadas = [];
  let palos = Object.keys(mazo);

  while (cartasSeleccionadas.length < 5) {
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    let cartasPalo = Object.values(mazo[paloAleatorio]);
    let cartaAleatoria = cartasPalo[Math.floor(Math.random() * cartasPalo.length)];
    if (!cartasSeleccionadas.includes(cartaAleatoria)) {
      cartasSeleccionadas.push(cartaAleatoria);
    }
  }

  return cartasSeleccionadas;
}


function jugar() {
  let CartasAleatorias = baraja(mazo);

  let contenedor = document.getElementById('cartasSeleccionadas');
  contenedor.innerHTML = '';
  let htmlCartas = '';
  CartasAleatorias.forEach(carta => {/*
      let img = document.createElement('img');
      img.src = carta.imagen;
      img.classList.add('carta');
      contenedor.appendChild(img);*/
    htmlCartas += `<img src="${carta.imagen}" class="carta" alt="${carta.valor}">`;
    contenedor.innerHTML = htmlCartas;
  });
}