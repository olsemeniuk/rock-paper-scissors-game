const NUMBER_OF_ROUNDS = 5;

playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundCounter = 0;

  while (roundCounter < NUMBER_OF_ROUNDS) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    [humanScore, computerScore] = playRound(
      humanChoice,
      computerChoice,
      humanScore,
      computerScore,
    );
    roundCounter++;
  }

  showGameResult(humanScore, computerScore);
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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  const roundResult = getRoundResult(humanChoice, computerChoice);
  const roundResultMessage = getRoundResultMessage(
    roundResult,
    humanChoice,
    computerChoice,
  );
  console.log(roundResultMessage);
  [humanScore, computerScore] = changeScore(
    roundResult,
    humanScore,
    computerScore,
  );
  showScore(humanScore, computerScore);
  return [humanScore, computerScore];
}

function showScore(humanScore, computerScore) {
  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}.`);
}

function getRoundResultMessage(roundResult, humanChoice, computerChoice) {
  let message = "";
  switch (roundResult) {
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
  return message;
}

function capitalizeString(str) {
  return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}

function changeScore(gameResult, humanScore, computerScore) {
  switch (gameResult) {
    case "You win!":
      humanScore++;
      break;
    case "You lose!":
      computerScore++;
      break;
  }

  return [humanScore, computerScore];
}

function getRoundResult(humanChoice, computerChoice) {
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
