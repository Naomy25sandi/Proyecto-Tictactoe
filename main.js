let casilla0 = document.getElementById('casilla0');
let casilla1 = document.getElementById('casilla1');
let casilla2 = document.getElementById('casilla2');
let casilla3 = document.getElementById('casilla3');
let casilla4 = document.getElementById('casilla4');
let casilla5 = document.getElementById('casilla5');
let casilla6 = document.getElementById('casilla6');
let casilla7 = document.getElementById('casilla7');
let casilla8 = document.getElementById('casilla8');
let iniciar = document.getElementById('start');

iniciar.addEventListener('click', _=>{
  location.reload();
}
)
// hago una variable donde incluyan el array de las casillas//
let tablero = [casilla0, casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8]

//  llamo la funcion y la recorro con el forEach y agrego el evento con el click//
function juego() {
  tablero.forEach(celda => celda.addEventListener("click", function () {
    celda.innerHTML = "❌"
    maquina()

    // si hay ganador
    if (checkLine()){}
  }))
}
juego()

function maquina() {
  setTimeout(() => {
    let vacio = tablero.filter(cel => cel.innerHTML == "");
    let numAleatorio = Math.floor(Math.random() * vacio.length)
    if (vacio.length > 0) {
      vacio[numAleatorio].innerHTML = "⭕"
    }
  }, 1000);
}
 //funcion para ganador
function checkLine() {
  const posGanadoras = [
    [0,1,2],    //FILAS
    [3,4,5],
    [6,7,8],
    [0,3,6],    //COLUMNAS 
    [1,4,7],
    [2,5,8],    
    [0,4,8],   //DIAGONALES
    [2,4,6]
    ] 
    for (const pos of posGanadoras) {// se crea la funcion de las posiciones ganadoras
      [a,b,c] = pos
      if(tablero[a].innerHTML && tablero[a].innerHTML === tablero[b].innerHTML && tablero[a].innerHTML==tablero[c].innerHTML){
          
        if (tablero[a].innerHTML == '❌') {
          alert("VICTORIA "+'❌')  
        }else{
          alert("VICTORIA "+'⭕')  
        }
        return true
        
        
      }   
}
}
function checkEmpate() {
  // Verifica si todas las casillas están llenas
  return tablero.every(celda => celda.innerHTML !== "");
}
function juego() {
  tablero.forEach(celda => celda.addEventListener("click", function () {
    celda.innerHTML = "❌";
    if (checkEmpate()) {
      alert("Empate!");
      return;
    }
    maquina();

    // si hay ganador
    if (checkLine()){}
  }));
}


