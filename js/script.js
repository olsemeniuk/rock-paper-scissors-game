const gameButtons = document.querySelector(".game__buttons");
const resultPara = document.querySelector(".game__result");
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

function playRound(humanChoice, computerChoice) {
  const roundResult = getRoundResult(humanChoice, computerChoice);
  const roundResultMessage = getRoundResultMessage(
    roundResult,
    humanChoice,
    computerChoice,
  );
  renderRoundResultMessage(roundResultMessage);
  changeScore(roundResult);
}

function renderRoundResultMessage(message) {
  resultPara.textContent = message;
}

// function showScore(humanScore, computerScore) {
//   console.log(`Score: You - ${humanScore}, Computer - ${computerScore}.`);
// }

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

// function showGameResult(humanScore, computerScore) {
//   const winner = getWinner(humanScore, computerScore);
//   const gameResultMessage = `Game over! ${winner === "human" ? "You win!" : winner === "computer" ? "You lose!" : "Tie!"}`;
//   console.log(gameResultMessage);
// }

// function getWinner(humanScore, computerScore) {
//   return humanScore > computerScore
//     ? "human"
//     : humanScore < computerScore
//       ? "computer"
//       : "tie";
// }
