const boxes = document.querySelectorAll(".box");
const restartButton = document.querySelector(".restart-button");
const playerXScoreElement = document.querySelector(".playerXScore");
const playerOScoreElement = document.querySelector(".playerOScore");
const pvpButton = document.querySelector(".pvp-button");
const pvcButton = document.querySelector(".pvc-button");
const gameModeElement = document.querySelector(".game-mode");

let playerXPoint = 0;
let playerOPoint = 0;

let gameMode = "PvP";

pvpButton.addEventListener("click", function(){
  gameMode = "PvP"
  gameModeElement.textContent = "Player vs Player";
});

pvcButton.addEventListener("click", function(){
  gameMode = "PvC"
  gameModeElement.textContent = "Player vs computer";
});


restartButton.addEventListener("click",function(){
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.textContent = "";
  }
  winner = false;
  toggle = false;
})

const winRows= [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let winner = false;
let toggle = false;
for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener('click', function () {
    if (winner){
      return;
    }
    // hier moet een x of een o ingevuld worden

    // als al ingevuld is, dan niet meer wijzigen
    if (box.textContent !== "") {
      return;
    }
    
    // toggle geeft aan wie aan de beurt is
    if (toggle) {
      box.textContent = 'O';
    } else {
      box.textContent = 'X';
    }

    

    if (gameMode == "PvP") {
      checkwinner();
      toggle = !toggle;
      
    } 

    if(gameMode == "PvC" && !winner ){
      computerMove();
      checkwinner();
    }  
  });
}
//
function computerMove(){
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    if (box.textContent == "") {
      box.textContent = "O";
      break;
    }
}
}


function checkwinner() {
  winner = false;
  for (let b = 0; b < winRows.length; b++) {
    const row = winRows[b];

    const square_a=boxes[row[0]];
    const square_b=boxes[row[1]];
    const square_c=boxes[row[2]];
    
    console.log(square_a.textContent);

    if (square_a.textContent == "" || square_b.textContent == "" || square_c.textContent == "") continue;
    if (square_a.textContent == square_b.textContent && square_b.textContent == square_c.textContent) {
      winner = true;
      break;
    }
  }

  if (winner) {
    
    if (toggle) {
      alert("O has won the game");
      playerOPoint++;
      playerOScoreElement.textContent = playerOPoint;
    }else{
      alert("X has won the game");
      playerXPoint++;
      playerXScoreElement.textContent = playerXPoint;
    }
  }
}

