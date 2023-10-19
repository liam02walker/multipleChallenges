const gameLeft = document.getElementById("gameLeft");
const gameRight = document.getElementById("gameRight");
const gameBall = document.getElementById("gameBall");
const startButton = document.getElementById("startButton");

const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const restartButton = document.getElementById("restartButton");
const whoWon = document.getElementById("whoWon");

// Game States
const beginContainer = document.getElementById("beginContainer");
const gameContainer = document.getElementById("gameContainer");
const overContainer = document.getElementById("overContainer");

let gameState = "start";
let gamePoints = {
  Player: 0,
  Player2: 0,
  Computer: 0,
};

restartButton.addEventListener("click", function () {
  gameState = "start";
});

startButton.addEventListener("click", function () {
  gameState = "play";
});

let platform = {
  PlayerY: 35,
  Speed: 2,
};

let ballState = {
  State: "LeftUp",
  ballY: 20,
  ballX: 60,
  speedHit: 1,
};

document.addEventListener("keydown", (keyPress) => {
  keyIsPressed(keyPress);
});

function keyIsPressed(event) {
  if (gameState === "play") {
    let keyName = event.key;
    if (keyName === "s") {
      if (platform.PlayerY < 79) {
        platform.PlayerY += platform.Speed;
        gameLeft.style.top = `${platform.PlayerY}%`;
      } else {
        return;
      }
    } else if (keyName === "w") {
      if (platform.PlayerY > 1) {
        platform.PlayerY -= platform.Speed;
        gameLeft.style.top = `${platform.PlayerY}%`;
      } else {
        return;
      }
    }
  }
}

function movingBall() {
  // if hits top
  if (ballState.ballY <= 0) {
    if (ballState.State === "LeftUp") {
      ballState.State = "LeftDown";
    } else if (ballState.State === "RightUp") {
      ballState.State = "RightDown";
    }
  }
  // if hits left
  else if (ballState.ballX <= 0) {
    ballState.State = "Restart";
    gamePoints.Computer += 1;
  }
  // if hits right
  else if (ballState.ballX >= 100) {
    if (ballState.State === "RightUp") {
      ballState.State = "LeftUp";
    } else if (ballState.State === "RightDown") {
      ballState.State = "LeftDown";
    }

    // ballState.State = "Restart";
    // gamePoints.Player += 1;
  }
  // if hits bottom
  else if (ballState.ballY >= 97.5) {
    if (ballState.State === "LeftDown") {
      ballState.State = "LeftUp";
    } else if (ballState.State === "RightDown") {
      ballState.State = "RightUp";
    }
  }
  if (
    (Math.floor(ballState.ballX) === 1 && Math.floor(ballState.ballY) === platform.PlayerY) ||
    (Math.floor(ballState.ballX) === 1 && Math.floor(ballState.ballY) <= platform.PlayerY + 20 && Math.floor(ballState.ballY) > platform.PlayerY)
  ) {
    if (ballState.State === "LeftUp") {
      ballState.State = "RightUp";
    } else if (ballState.State === "LeftDown") {
      ballState.State = "RightDown";
    }
  }
  // Direction to move
  if (ballState.State === "RightDown") {
    ballState.ballY += 0.2 * ballState.speedHit;
    ballState.ballX += 0.2 * ballState.speedHit;
    gameBall.style.top = `${ballState.ballY}%`;
    gameBall.style.left = `${ballState.ballX}%`;
  } else if (ballState.State === "RightUp") {
    ballState.ballY -= 0.2 * ballState.speedHit;
    ballState.ballX += 0.2 * ballState.speedHit;
    gameBall.style.top = `${ballState.ballY}%`;
    gameBall.style.left = `${ballState.ballX}%`;
  } else if (ballState.State === "LeftUp") {
    ballState.ballY -= 0.2 * ballState.speedHit;
    ballState.ballX -= 0.2 * ballState.speedHit;
    gameBall.style.top = `${ballState.ballY}%`;
    gameBall.style.left = `${ballState.ballX}%`;
  } else if (ballState.State === "LeftDown") {
    ballState.ballY += 0.2 * ballState.speedHit;
    ballState.ballX -= 0.2 * ballState.speedHit;
    gameBall.style.top = `${ballState.ballY}%`;
    gameBall.style.left = `${ballState.ballX}%`;
  } else if (ballState.State === "Restart") {
    ballState.State = "LeftUp";
    ballState.ballY = 50;
    ballState.ballX = 50;
  }
}

function updateScore() {
  compScore.innerText = `Computer: ${gamePoints.Computer}`;
  playerScore.innerText = `Player: ${gamePoints.Player}`;

  if (gamePoints.Computer === 5) {
    gameState = "over";
    whoWon.innerText = "YOU LOST!";
  } else if (gamePoints.Player === 5) {
    gameState = "over";
    whoWon.innerText = "YOU WON!";
  }
}

function gameRunning() {
  if (gameState === "play") {
    beginContainer.style.display = "none";
    movingBall();
    updateScore();
  } else if (gameState === "start") {
    beginContainer.style.display = "flex";
    overContainer.style.display = "none";
  } else if (gameState === "over") {
    gamePoints.Computer = 0;
    gamePoints.Player = 0;
    overContainer.style.display = "flex";
  }
}

setInterval(gameRunning, 10);
