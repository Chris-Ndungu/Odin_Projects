const winningScore = 5;
const userPlayer = "Player";
const computerPlayer = "Computer";

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsElement = document.querySelector("#results");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  const outcome = determineWinner(playerSelection, computerSelection);

  resultsElement.textContent = `You chose ${playerSelection}, ${computerPlayer} chose ${computerSelection}. ${outcome}`;

  updateScoreDisplay(outcome);
  checkWinner();
}

// get the computer's choice
// randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `${computerPlayer} wins!`;
  } else {
    return `${userPlayer} wins!`;
  }
}

function updateScoreDisplay(outcome) {
  const playerScoreElement = document.querySelector("#player-score");
  const computerScoreElement = document.querySelector("#computer-score");

  if (outcome === `${userPlayer} wins!`) {
    playerScore++;
  } else if (outcome === `${computerPlayer} wins!`) {
    computerScore++;
  }

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === winningScore || computerScore === winningScore) {
    const winner = playerScore === winningScore ? userPlayer : computerPlayer;
    resultsElement.textContent = `${winner} wins the game!`;
  }
}
