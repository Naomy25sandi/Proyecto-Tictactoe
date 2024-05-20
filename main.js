let casilla0 = document.getElementById('b0');
let casilla1 = document.getElementById('b1');
let casilla2 = document.getElementById('b2');
let casilla3 = document.getElementById('b3');
let casilla4 = document.getElementById('b4');
let casilla5 = document.getElementById('b5');
let casilla6 = document.getElementById('b6');
let casilla7 = document.getElementById('b7');
let casilla8 = document.getElementById('b8');

let tablero = [casilla0,casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8]


function juego() {
  tablero.forEach(celda=>celda.addEventListener("click",function(){
    celda.innerHTML = "x"
  }))
}

function juegoPc() {
  
}
juego()