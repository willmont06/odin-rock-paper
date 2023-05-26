const options = ["rock", "paper", "scissors"];
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset');
let playerScore = 0;
let computerScore = 0;
const outcomeDiv = document.querySelector('.outcome');

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    outcomeDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    outcomeDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    outcomeDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Update the scores
  outcomeDiv.textContent += `\nPlayer Score: ${playerScore} | Computer Score: ${computerScore}`;

  // Check if game is over
  if (playerScore === 5 || computerScore === 5) {
    // Disable the buttons to prevent further gameplay
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    // Display the final result
    if (playerScore > computerScore) {
      outcomeDiv.textContent += "\nYou win the game!";
    } else if (playerScore < computerScore) {
      outcomeDiv.textContent += "\nYou lose the game!";
    } else {
      outcomeDiv.textContent += "\nIt's a tie game!";
    }
  }
}

rockButton.addEventListener('click', function() {
  playRound('rock');
});

paperButton.addEventListener('click', function() {
  playRound('paper');
});

scissorsButton.addEventListener('click', function() {
  playRound('scissors');
});

resetButton.addEventListener('click', function() {
  // reset score to 0 
  playerScore = 0 
  computerScore = 0 
// enable the buttons 
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;

  // Clear the outcome div
  outcomeDiv.textContent = '';

});


