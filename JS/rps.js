const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const gameWonScreen = document.getElementById("gameWonScreen");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const gameStart = document.getElementById("gameStart");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const goButton = document.getElementById("goButton");
const playerChoice = document.getElementById("playerChoice");
const compChoice = document.getElementById("compChoice");

// Start the game
gameStart.addEventListener("click", startGame);
function startGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
}

// Playing the game
let playerChose = "";
let compChose = "";
let playerPoints = 0;
let compPoints = 0;

rock.addEventListener("click", () => imageChange("rock"));
paper.addEventListener("click", () => imageChange("paper"));
scissors.addEventListener("click", () => imageChange("scissors"));
function imageChange(type) {
  playerChoice.src = `./Images/${type}.png`;
  playerChose = `${type}`;
}

function compsChoice() {
  let randoNum = Math.random();
  if (randoNum < 0.33) {
    compChose = "rock";
  } else if (randoNum < 0.66) {
    compChose = "paper";
  } else {
    compChose = "scissors";
  }
  compChoice.src = `./Images/${compChose}.png`;
}

function whoWon() {
  if (
    (playerChose === "rock" && compChose === "paper") ||
    (playerChose === "paper" && compChose === "scissors") ||
    (playerChose === "scissors" && compChose === "rock")
  ) {
    compPoints++;
  } else if (
    (compChose === "rock" && playerChose === "paper") ||
    (compChose === "paper" && playerChose === "scissors") ||
    (compChose === "scissors" && playerChose === "rock")
  ) {
    playerPoints++;
  }
  updateScore();
}

function updateScore() {
  playerScore.innerText = `Player: ${playerPoints}`;
  compScore.innerText = `Computer: ${compPoints}`;
}

goButton.addEventListener("click", function () {
  compsChoice();
  whoWon();
  scoreCheck();
});

// Game Over
function scoreCheck() {
  if (playerPoints === 5) {
    alert("Well Done!\nYou Won!");
    startScreen.style.display = "flex";
    gameScreen.style.display = "none";
  } else if (compPoints === 5) {
    alert("Unlucky! \nMaybe next time!");
    startScreen.style.display = "flex";
    gameScreen.style.display = "none";
  }
}
