let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let scoreDisplay = document.getElementById("scoreDisplay");
  let div = document.getElementById('score');
  
  if (
    (playerSelection === rock && computerSelection == scissors) ||
    (playerSelection === scissors && computerSelection == paper) ||
    (playerSelection === paper && computerSelection == rock)
  ) {
    playerScore++;
    scoreDisplay.innerText = `player score ${playerScore}`;
    console.log(`player scores, current score : ${playerScore} : ${computerScore}`);
  } else if (
    (computerSelection == rock && playerSelection == scissors) ||
    (computerSelection == scissors && playerSelection == paper) ||
    (computerSelection == paper && playerSelection == rock)
  ) {
    computerScore++;
    scoreDisplay.innerText = `computer score ${computerScore}`;
    console.log(`computer scores, current score : ${playerScore} : ${computerScore}`);
  } else {
    scoreDisplay.innerText = `that was a tie`;
    console.log("that was a tie");
  }

  if (playerScore === 5) {
    div.innerText = "YOU WIN";
    console.log("player won");
  } else if (computerScore === 5) {
    div.innerText = "YOU LOSE";
    console.log("computer won");
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else if (computerChoice === 2) {
    return scissors;
  }
}


