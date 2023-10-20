// Difficulty Settings
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");
const impossibleButton = document.getElementById("impossibleButton");

easyButton.addEventListener("click", function () {
  gameDifficulty.Difficulty = "Easy";
  gameState = "Playing";
});
hardButton.addEventListener("click", function () {
  gameDifficulty.Difficulty = "Hard";
  gameState = "Playing";
});
impossibleButton.addEventListener("click", function () {
  gameDifficulty.Difficulty = "Impossible";
  gameState = "Playing";
});

const gameDifficulty = {
  Difficulty: "Easy",
  Easy: {
    DifficultySpeed: 1,
    CompSpeed: 1,
    PlatformSize: 20,
  },
  Hard: {
    DifficultySpeed: 1.5,
    CompSpeed: 2.5,
    PlatformSize: 15,
  },
  Impossible: {
    DifficultySpeed: 2,
    CompSpeed: 5,
    PlatformSize: 10,
  },
};

// Game State
const paused = document.getElementById("beginContainer");
const playing = document.getElementById("gameContainer");
const gameOver = document.getElementById("overContainer");
const whoWon = document.getElementById("whoWon");

let gameState = "Paused";

function myGameState() {
  if (gameState === "Paused") {
    paused.style.display = "flex";
    playing.style.display = "none";
    gameOver.style.display = "none";
  } else if (gameState === "Playing") {
    playing.style.display = "flex";
    paused.style.display = "none";
    gameOver.style.display = "none";
  } else if (gameState === "GameOver") {
    gameOver.style.display = "flex";
    playing.style.display = "none";
    paused.style.display = "none";
  }
}

// Playing the game
const gameBall = document.getElementById("gameBall");
const playerPlatform = document.getElementById("gameLeft");
const compPlatform = document.getElementById("gameRight");
const playerScoreTxt = document.getElementById("playerScore");
const compScoreTxt = document.getElementById("compScore");

let hitAngle = 1.3;

const myBall = {
  State: "Left",
  XPos: 50,
  YPos: 50,
  Speed: 0.2,
};

const platforms = {
  Player: {
    State: "Up",
    Score: 0,
    XPos: 35,
    KeyPress: "w",
  },
  Computer: {
    State: "Up",
    Score: 0,
    XPos: 35,
  },
};

// Move the player
document.addEventListener("keydown", (keyPress) => {
  keyIsPressed(keyPress.key);
});
function keyIsPressed(event) {
  if (gameState === "Playing") {
    if (event === "s") {
      if (platforms.Player.XPos >= 78) {
        return;
      }
      platforms.Player.XPos += 2;
      playerPlatform.style.top = `${platforms.Player.XPos}%`;
      platforms.Player.KeyPress = "s";
    } else if (event === "w") {
      if (platforms.Player.XPos <= 1) {
        return;
      }
      platforms.Player.XPos -= 2;
      playerPlatform.style.top = `${platforms.Player.XPos}%`;
      platforms.Player.KeyPress = "w";
    }
  }
}

function gamePlaying() {
  // Difficulty For Each game state
  if (gameDifficulty.Difficulty === "Easy") {
    // Platform Sizing
    playerPlatform.style.height = `${gameDifficulty.Easy.PlatformSize}%`;

    // Computer Moving
    if (platforms.Computer.XPos <= 1) {
      platforms.Computer.State = "Down";
    } else if (platforms.Computer.XPos >= 79) {
      platforms.Computer.State = "Up";
    }

    if (platforms.Computer.State === "Up") {
      platforms.Computer.XPos -= 0.2 * gameDifficulty.Easy.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    } else if (platforms.Computer.State === "Down") {
      platforms.Computer.XPos += 0.2 * gameDifficulty.Easy.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    }

    // Ball Moving Directions
    if (myBall.State === "Left") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "Right") {
      myBall.XPos += myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "LeftDown") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Easy.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightDown") {
      myBall.XPos += myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Easy.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "LeftUp") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Easy.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightUp") {
      myBall.XPos += myBall.Speed * gameDifficulty.Easy.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Easy.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    }
  } else if (gameDifficulty.Difficulty === "Hard") {
    // Platform Sizing
    playerPlatform.style.height = `${gameDifficulty.Hard.PlatformSize}%`;

    // Computer Moving
    if (platforms.Computer.XPos <= 1) {
      platforms.Computer.State = "Down";
    } else if (platforms.Computer.XPos >= 79) {
      platforms.Computer.State = "Up";
    }

    if (platforms.Computer.State === "Up") {
      platforms.Computer.XPos -= 0.2 * gameDifficulty.Hard.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    } else if (platforms.Computer.State === "Down") {
      platforms.Computer.XPos += 0.2 * gameDifficulty.Hard.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    }

    // Ball Moving Directions
    if (myBall.State === "Left") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "Right") {
      myBall.XPos += myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "LeftDown") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Hard.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightDown") {
      myBall.XPos += myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Hard.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "LeftUp") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Hard.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightUp") {
      myBall.XPos += myBall.Speed * gameDifficulty.Hard.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Hard.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    }
  } else if (gameDifficulty.Difficulty === "Impossible") {
    // Platform Sizing
    playerPlatform.style.height = `${gameDifficulty.Impossible.PlatformSize}%`;

    // Computer Moving
    if (platforms.Computer.XPos <= 1) {
      platforms.Computer.State = "Down";
    } else if (platforms.Computer.XPos >= 79) {
      platforms.Computer.State = "Up";
    }

    if (platforms.Computer.State === "Up") {
      platforms.Computer.XPos -= 0.2 * gameDifficulty.Impossible.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    } else if (platforms.Computer.State === "Down") {
      platforms.Computer.XPos += 0.2 * gameDifficulty.Impossible.CompSpeed;
      compPlatform.style.top = `${platforms.Computer.XPos}%`;
    }

    // Ball Moving Directions
    if (myBall.State === "Left") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "Right") {
      myBall.XPos += myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      gameBall.style.left = `${myBall.XPos}%`;
    } else if (myBall.State === "LeftDown") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Impossible.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightDown") {
      myBall.XPos += myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      myBall.YPos += myBall.Speed * gameDifficulty.Impossible.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "LeftUp") {
      myBall.XPos -= myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Impossible.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    } else if (myBall.State === "RightUp") {
      myBall.XPos += myBall.Speed * gameDifficulty.Impossible.DifficultySpeed;
      myBall.YPos -= myBall.Speed * gameDifficulty.Impossible.DifficultySpeed * hitAngle;
      gameBall.style.left = `${myBall.XPos}%`;
      gameBall.style.top = `${myBall.YPos}%`;
    }
  }

  // Check if the ball has hit the top or bottom
  if (myBall.YPos <= 1) {
    if (myBall.State === "LeftUp") {
      myBall.State = "LeftDown";
    } else if (myBall.State === "RightUp") {
      myBall.State = "RightDown";
    }
  } else if (myBall.YPos >= 98) {
    if (myBall.State === "LeftDown") {
      myBall.State = "LeftUp";
    } else if (myBall.State === "RightDown") {
      myBall.State = "RightUp";
    }
  }
  // Check if the ball has hit the left or right
  if (myBall.XPos <= 0) {
    platforms.Computer.Score += 1;
    compScoreTxt.innerText = `COMPUTER: ${platforms.Computer.Score}`;
    myBall.XPos = 50;
    myBall.YPos = 50;
    gameBall.style.top = `${myBall.YPos}%`;
    gameBall.style.left = `${myBall.XPos}%`;
    myBall.State = "Left";
  } else if (myBall.XPos >= 98) {
    platforms.Player.Score += 1;
    playerScoreTxt.innerText = `PLAYER: ${platforms.Player.Score}`;
    myBall.XPos = 50;
    myBall.YPos = 50;
    gameBall.style.top = `${myBall.YPos}%`;
    gameBall.style.left = `${myBall.XPos}%`;
    myBall.State = "Right";
  }
  // Check if the ball has hit the platform
  if (
    Math.floor(myBall.XPos) === 1 &&
    Math.floor(myBall.YPos) >= platforms.Player.XPos - 1 &&
    Math.floor(myBall.YPos) <= platforms.Player.XPos + gameDifficulty.Easy.PlatformSize - 1
  ) {
    if (platforms.Player.KeyPress === "w") {
      myBall.State = "RightUp";
    } else if (platforms.Player.KeyPress === "s") {
      myBall.State = "RightDown";
    }
  }
  if (Math.floor(myBall.XPos) === 97 && Math.floor(myBall.YPos) >= platforms.Computer.XPos && Math.floor(myBall.YPos) <= platforms.Computer.XPos + 19) {
    if (platforms.Computer.State === "Up") {
      myBall.State = "LeftUp";
    } else if (platforms.Computer.State === "Down") {
      myBall.State = "LeftDown";
    }
  }

  // Check who won the game
  if (platforms.Computer.Score === 5) {
    gameState = "GameOver";
    whoWon.innerText = "YOU LOST!";
  } else if (platforms.Player.Score === 5) {
    gameState = "GameOver";
    whoWon.innerText = "YOU WON!";
  }
}

// Constant Game Updates
function gameUpdates() {
  myGameState();
  if (gameState === "Playing") {
    gamePlaying();
  }
}
setInterval(gameUpdates, 10);

// Game Over Screen
const overButton = document.getElementById("restartButton");

overButton.addEventListener("click", function () {
  gameState = "Paused";
  platforms.Player.Score = 0;
  platforms.Computer.Score = 0;
  playerScoreTxt.innerText = `PLAYER: ${platforms.Player.Score}`;
  compScoreTxt.innerText = `PLAYER: ${platforms.Computer.Score}`;
});
