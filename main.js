let casilla0 = document.getElementById('b0');
let casilla1 = document.getElementById('b1');
let casilla2 = document.getElementById('b2');
let casilla3 = document.getElementById('b3');
let casilla4 = document.getElementById('b4');
let casilla5 = document.getElementById('b5');
let casilla6 = document.getElementById('b6');
let casilla7 = document.getElementById('b7');
let casilla8 = document.getElementById('b8');
// hago una variable donde incluyan el array de las casillas//
let tablero = [casilla0,casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8]
let ganador = document.getElementById('result');// funcion para ver el ganador.
//  llamo la funcion y la recorro con el forEach y agrego el evento con el click//
function juego() {
   tablero.forEach(celda=>celda.addEventListener("click", function() {
    celda.innerHTML = "❌"
    maquina()
  }))
}
juego()

function maquina() {
  let vacio = tablero.filter(cell=>cell.innerHTML == "");
  let numAleatorio = Math.floor(Math.random()*vacio.length)
  if (vacio.length > 0) {
    vacio[numAleatorio].innerHTML = "⭕";
   
  }
}
