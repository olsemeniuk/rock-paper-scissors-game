// Algorithm:
/*
1. get human and computer choice on button click;
2. check who won;
3. update score;
4. show round result message;
5. when one player gets 5 score points - stop the game;
6. announce the winner.
*/

const gameButtons = document.querySelector(".game__buttons");
const NUMBER_OF_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

gameButtons.addEventListener("click", (event) => {
  const humanChoice = getHumanChoice(event);
  playGame(humanChoice);
});

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

function showGameResult(humanScore, computerScore) {
  const winner = getWinner(humanScore, computerScore);
  const gameResultMessage = `Game over! ${winner === "human" ? "You win!" : winner === "computer" ? "You lose!" : "Tie!"}`;
  console.log(gameResultMessage);
}

function getWinner(humanScore, computerScore) {
  return humanScore > computerScore
    ? "human"
    : humanScore < computerScore
      ? "computer"
      : "tie";
}

function playRound(humanChoice, computerChoice) {
  const roundResult = getRoundResult(humanChoice, computerChoice);
  const roundResultMessage = getRoundResultMessage(
    roundResult,
    humanChoice,
    computerChoice,
  );
  console.log(roundResultMessage);
  changeScore(roundResult);
  showScore();
}

function showScore(humanScore, computerScore) {
  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}.`);
}

function getRoundResultMessage(roundResult, humanChoice, computerChoice) {
  let message = "";
  switch (roundResult) {
    case "tie":
      message = `It's tie! You both chose ${capitalizeString(humanChoice)}`;
      break;
    case "win":
      message = `You win! ${capitalizeString(humanChoice)} beats ${capitalizeString(computerChoice)}.`;
      break;
    case "lose":
      message = `You lose! ${capitalizeString(computerChoice)} beats ${capitalizeString(humanChoice)}.`;
      break;
  }
  return message;
}

function capitalizeString(str) {
  return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}

function changeScore(roundResult) {
  switch (roundResult) {
    case "win":
      humanScore++;
      break;
    case "lose":
      computerScore++;
      break;
  }
}

function getRoundResult(humanChoice, computerChoice) {
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

function getHumanChoice(event) {
  const { target } = event;
  if (!target.dataset.choice) return;
  return target.dataset.choice;
}
