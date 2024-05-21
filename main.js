let casilla0 = document.getElementById('casilla0');
let casilla1 = document.getElementById('casilla1');
let casilla2 = document.getElementById('casilla2');
let casilla3 = document.getElementById('casilla3');
let casilla4 = document.getElementById('casilla4');
let casilla5 = document.getElementById('casilla5');
let casilla6 = document.getElementById('casilla6');
let casilla7 = document.getElementById('casilla7');
let casilla8 = document.getElementById('casilla8');

// hago una variable donde incluyan el array de las casillas//
let tablero = [casilla0, casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8]


//  llamo la funcion y la recorro con el forEach y agrego el evento con el click//
function juego() {
  tablero.forEach(celda => celda.addEventListener("click", function () {
    celda.innerHTML = "❌"
    maquina()
  }))

}
juego()
// llamo la funcion para que la maquina use su turno.
function maquina() {
  let vacio = tablero.filter(cel => cel.innerHTML == "");
  let numAleatorio = Math.floor(Math.random() * vacio.length)
  if (vacio.length > 0) {
    vacio[numAleatorio].innerHTML = "⭕"
  }
}

