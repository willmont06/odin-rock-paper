const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Tie!");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    console.log(`You win! Final score: ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose! Final score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`Tie game! Final score: ${playerScore}-${computerScore}`);
  }
}

game();
