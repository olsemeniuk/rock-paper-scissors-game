let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

function playRound(humanChoice, computerChoice) {
  const gameResult = getGameResult(humanChoice, computerChoice);
  let message = "";
  switch (gameResult) {
    case "It's tie!":
      message = `It's tie! You both chose ${capitalizeString(humanChoice)}`;
      break;
    case "You win!":
      message = `You win! ${capitalizeString(humanChoice)} beats ${capitalizeString(computerChoice)}.`;
      break;
    case "You lose!":
      message = `You lose! ${capitalizeString(computerChoice)} beats ${capitalizeString(humanChoice)}.`;
      break;
  }
  console.log(message);
  changeScore(gameResult);
  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}.`);
}

function capitalizeString(str) {
  return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}

function changeScore(gameResult) {
  switch (gameResult) {
    case "You win!":
      humanScore++;
      break;
    case "You lose!":
      computerScore++;
      break;
  }
}

function getGameResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }

  return "You lose!";
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
