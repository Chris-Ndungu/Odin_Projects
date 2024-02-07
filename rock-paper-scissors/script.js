// get the computer's choice
// randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let choice = Math.ceil(Math.random() * 3);
  // switch through the choices

  switch (choice) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
}

// get player's choice
function getUserChoice() {
  let userChoice = prompt("Select Rock, Paper or Scissors");
  userChoice = userChoice.toLowerCase();

  return userChoice;
}

// write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Check for a tie
  if (playerSelection === computerSelection) {
    console.log(`It's a Tie!`);
    return 0;
  }
  // Check if computer beats the player
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    // player looses
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  } else {
    // player wins
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  }
}

// play the game five times in a loop
function playGame() {
  const maxGames = 5;
  let currentGame = 1;
  let playerScore = (computerScore = 0);

  while (currentGame <= maxGames) {
    console.log(`Round ${currentGame}...`);

    result = playRound(getUserChoice(), getComputerChoice());
    if (result === 0) {
    } else if (result === -1) {
      computerScore++;
    } else if (result === 1) {
      playerScore++;
    }
    currentGame++;
  }
  //Final score
  console.log(
    `Final Score... Player: ${playerScore} Computer: ${computerScore}`
  );
}

playGame();
