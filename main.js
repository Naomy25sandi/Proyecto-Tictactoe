//llamo al primer jugador
let isPlayerOne = true;
let box= document.getElementsByClassName("box");
console.log(box)

for (let i = 0; i < box.length; i++) {
   box[1].addEventListener('click', userMove);
    
}
function userMove(e) {
  let boxValue = e.target.innerHTML;
  if (boxValue.length) {
    e.target.innerHTML = isPlayerOne? 'X' : 'O';

    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 2);
    checkLine(6, 4, 2);
  } 

}
function checkLine(c1, c2, c3) {
    if (
        box[c1].innerHTML.length && 
        box[c1].innerHTML == box[c2].innerHTML && 
        box[c2].innerHTML == box[c3].innerHTML
    ) {
       showWinner(box[c1].innerHTML);
    }
    
}
function showWinner(player) {
    document.querySelector('#results').innerHTML = player + "win";
    
}