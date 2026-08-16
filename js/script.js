let humanScore = 0;
let computerScore = 0;

function getGameResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissors";
  return computerChoice;
}

function getHumanChoice() {
  return prompt("What is your choice?").toLowerCase();
}
