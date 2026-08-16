let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissors";
  return computerChoice;
}

function getHumanChoice() {
  return prompt('What is your choice?').toLowerCase();
}
