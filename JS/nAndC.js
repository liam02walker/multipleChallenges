const placeButtons = document.querySelectorAll(".placeImg");
const placedImage = document.getElementById("imgPlaced");
const playerChoice = document.querySelectorAll(".chooseButton");
const otherTeam = document.getElementById("otherTeam");

const playGame = document.getElementById("playGame");
const startGame = document.getElementById("startGame");
const endGame = document.getElementById("endGame");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

let playerTurn = true;
let playerTeam = "Circle";
let playComputer = true;
let gameState = "start";

const placeType = ["set", "set", "set", "set", "set", "set", "set", "set", "set"];
const remainingPlace = [];

playerChoice.forEach(function (clicked) {
  clicked.addEventListener("click", function () {
    if (clicked.id === "twoPlayer") {
      playComputer = false;
      gameState = "play";
      playTheGame();
    } else if (clicked.id === "computer") {
      playComputer = true;
      gameState = "play";
      playTheGame();
    }
  });
});

function playTheGame() {
  if (playComputer === false) {
    otherTeam.innerText = "PLAYER 2";
    playGame.style.display = "block";
    startGame.style.display = "none";

    // Checks who won
    if (
      (placeType[0] === "circle" && placeType[1] === "circle" && placeType[2] === "circle") ||
      (placeType[3] === "circle" && placeType[4] === "circle" && placeType[5] === "circle") ||
      (placeType[6] === "circle" && placeType[7] === "circle" && placeType[8] === "circle") ||
      (placeType[0] === "circle" && placeType[3] === "circle" && placeType[6] === "circle") ||
      (placeType[1] === "circle" && placeType[4] === "circle" && placeType[7] === "circle") ||
      (placeType[2] === "circle" && placeType[5] === "circle" && placeType[8] === "circle") ||
      (placeType[0] === "circle" && placeType[4] === "circle" && placeType[8] === "circle") ||
      (placeType[2] === "circle" && placeType[4] === "circle" && placeType[6] === "circle")
    ) {
      gameState = "circleWon";
    } else if (
      (placeType[0] === "cross" && placeType[1] === "cross" && placeType[2] === "cross") ||
      (placeType[3] === "cross" && placeType[4] === "cross" && placeType[5] === "cross") ||
      (placeType[6] === "cross" && placeType[7] === "cross" && placeType[8] === "cross") ||
      (placeType[0] === "cross" && placeType[3] === "cross" && placeType[6] === "cross") ||
      (placeType[1] === "cross" && placeType[4] === "cross" && placeType[7] === "cross") ||
      (placeType[2] === "cross" && placeType[5] === "cross" && placeType[8] === "cross") ||
      (placeType[0] === "cross" && placeType[4] === "cross" && placeType[8] === "cross") ||
      (placeType[2] === "cross" && placeType[4] === "cross" && placeType[6] === "cross")
    ) {
      gameState = "crossWon";
    }

    // Check who's turn it is
    placeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (playerTurn === true) {
          if (button.querySelector("#imgPlaced")) {
            return;
          } else {
            let imageMaker = document.createElement("img");
            imageMaker.src = `./Images/redCircle.png`;
            imageMaker.setAttribute("id", "imgPlaced");
            button.appendChild(imageMaker);
            playerTurn = false;
            switch (button.id) {
              case "box1":
                placeType[0] = "circle";
                break;
              case "box2":
                placeType[1] = "circle";
                break;
              case "box3":
                placeType[2] = "circle";
                break;
              case "box4":
                placeType[3] = "circle";
                break;
              case "box5":
                placeType[4] = "circle";
                break;
              case "box6":
                placeType[5] = "circle";
                break;
              case "box7":
                placeType[6] = "circle";
                break;
              case "box8":
                placeType[7] = "circle";
                break;
              case "box9":
                placeType[8] = "circle";
                break;
            }
          }
        }
      });
    });
    placeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (playerTurn === false) {
          if (button.querySelector("#imgPlaced")) {
            return;
          } else {
            let imageMaker = document.createElement("img");
            imageMaker.src = `./Images/redCross.png`;
            imageMaker.setAttribute("id", "imgPlaced");
            button.appendChild(imageMaker);
            playerTurn = true;
            switch (button.id) {
              case "box1":
                placeType[0] = "cross";
                break;
              case "box2":
                placeType[1] = "cross";
                break;
              case "box3":
                placeType[2] = "cross";
                break;
              case "box4":
                placeType[3] = "cross";
                break;
              case "box5":
                placeType[4] = "cross";
                break;
              case "box6":
                placeType[5] = "cross";
                break;
              case "box7":
                placeType[6] = "cross";
                break;
              case "box8":
                placeType[7] = "cross";
                break;
              case "box9":
                placeType[8] = "cross";
                break;
            }
          }
        }
      });
    });
  } else {
    // Starts The Game with Computer
    otherTeam.innerText = "COMPUTER";
    playGame.style.display = "block";
    startGame.style.display = "none";

    // Checks if computer or player gets 3 in a row
    if (
      (placeType[0] === "circle" && placeType[1] === "circle" && placeType[2] === "circle") ||
      (placeType[3] === "circle" && placeType[4] === "circle" && placeType[5] === "circle") ||
      (placeType[6] === "circle" && placeType[7] === "circle" && placeType[8] === "circle") ||
      (placeType[0] === "circle" && placeType[3] === "circle" && placeType[6] === "circle") ||
      (placeType[1] === "circle" && placeType[4] === "circle" && placeType[7] === "circle") ||
      (placeType[2] === "circle" && placeType[5] === "circle" && placeType[8] === "circle") ||
      (placeType[0] === "circle" && placeType[4] === "circle" && placeType[8] === "circle") ||
      (placeType[2] === "circle" && placeType[4] === "circle" && placeType[6] === "circle")
    ) {
      gameState = "won";
    } else if (
      (placeType[0] === "cross" && placeType[1] === "cross" && placeType[2] === "cross") ||
      (placeType[3] === "cross" && placeType[4] === "cross" && placeType[5] === "cross") ||
      (placeType[6] === "cross" && placeType[7] === "cross" && placeType[8] === "cross") ||
      (placeType[0] === "cross" && placeType[3] === "cross" && placeType[6] === "cross") ||
      (placeType[1] === "cross" && placeType[4] === "cross" && placeType[7] === "cross") ||
      (placeType[2] === "cross" && placeType[5] === "cross" && placeType[8] === "cross") ||
      (placeType[0] === "cross" && placeType[4] === "cross" && placeType[8] === "cross") ||
      (placeType[2] === "cross" && placeType[4] === "cross" && placeType[6] === "cross")
    ) {
      gameState = "lost";
    }

    // Player's Turn To Act
    placeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (playerTurn === true) {
          if (button.querySelector("#imgPlaced")) {
            return;
          } else {
            let imageMaker = document.createElement("img");
            imageMaker.src = `./Images/red${playerTeam}.png`;
            imageMaker.setAttribute("id", "imgPlaced");
            button.appendChild(imageMaker);
            playerTurn = false;
            switch (button.id) {
              case "box1":
                placeType[0] = "circle";
                break;
              case "box2":
                placeType[1] = "circle";
                break;
              case "box3":
                placeType[2] = "circle";
                break;
              case "box4":
                placeType[3] = "circle";
                break;
              case "box5":
                placeType[4] = "circle";
                break;
              case "box6":
                placeType[5] = "circle";
                break;
              case "box7":
                placeType[6] = "circle";
                break;
              case "box8":
                placeType[7] = "circle";
                break;
              case "box9":
                placeType[8] = "circle";
                break;
            }
          }
        }
      });
    });

    // Computer's Turn To Act
    if (playerTurn === false) {
      remainingPlace.length = 0;
      for (i = 0; i < placeType.length; i++) {
        if (placeType[i] === "set") {
          remainingPlace.push(i);
        }
      }
      console.log(remainingPlace);

      let ranNum = Math.floor(Math.random() * remainingPlace.length);
      let betterNum = remainingPlace[ranNum];

      let imageMaker = document.createElement("img");
      imageMaker.src = `./Images/redCross.png`;
      imageMaker.setAttribute("id", "imgPlaced");
      if (placeButtons[betterNum].querySelector("#imgPlaced")) {
        return;
      } else {
        placeButtons[betterNum].appendChild(imageMaker);
        placeType[betterNum] = "cross";
        playerTurn = true;
      }
    }
  }
}

function endTheGame() {
  endGame.style.display = "flex";
  if (gameState === "won") {
    const won = document.getElementById("wonGame");
    won.style.display = "block";
  } else if (gameState === "lost") {
    const lost = document.getElementById("lostGame");
    lost.style.display = "block";
  } else if (gameState === "circleWon") {
    const won = document.getElementById("wonGame");
    won.innerText = "PLAYER 1 WON";
    won.style.display = "block";
  } else if (gameState === "crossWon") {
    const won = document.getElementById("wonGame");
    won.innerText = "PLAYER 2 WON";
    won.style.display = "block";
  }
}

function gameRunning() {
  if (gameState === "play") {
    playTheGame();
  } else if (gameState === "won" || gameState === "lost" || gameState === "circleWon" || gameState === "crossWon") {
    endTheGame();
  } else {
    return;
  }
}

setInterval(gameRunning, 200);
