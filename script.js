function getComputerChoice() {
  let x = Math.random();
  if (x < 1 / 3) {
    return "rock";
  } else if (x < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  return prompt("Enter rock, paper or scissor", "");
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorButton = document.createElement("button");
scissorButton.textContent = "scissor";
const buttons = document.createElement("div");
document.body.append(buttons);
buttons.append(rockButton, paperButton, scissorButton);

buttons.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.textContent) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissor":
      playRound("scissor", getComputerChoice());
      break;
  }
});

function playRound(humanSelection, computerSelection) {
  let output = `
    Human's Choice:  ${humanSelection}
    Computer's Choice:  ${computerSelection}
  `;
  if (humanSelection === "rock" && computerSelection === "scissor") {
    ++humanScore;
    output += `You win! Rock beats Scissor.`;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    ++humanScore;
    output += `You win! Paper beats Rock.`;
  } else if (humanSelection === "scissor" && computerSelection === "paper") {
    ++humanScore;
    output += `You win! Scissor beats Paper.`;
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    ++computerScore;
    output += `You lose! Paper beats Rock.`;
  } else if (humanSelection === "paper" && computerSelection === "scissor") {
    ++computerScore;
    output += `You lose! Scissor beats Paper.`;
  } else if (humanSelection === "scissor" && computerSelection === "rock") {
    ++computerScore;
    output += `You lose! Rock beats Scissor.`;
  } else if (humanSelection === computerSelection) {
    output += `Draw!`;
  } else {
    output += `Invalid choice.`;
  }
  results.textContent = output;
  score.textContent = `
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  winner.textContent = getWinner();
}

const results = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");
buttons.append(results, score, winner);
results.classList.add("preserve-line");
score.classList.add("preserve-line");

function getWinner() {
  if (humanScore === 5) {
    return "You win!";
  } else if (computerScore === 5) {
    return "You lose!";
  }
}

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`Game ${i}`);
//     console.log(playRound(getHumanChoice(), getComputerChoice()));
//   }
//   console.log(getWinner());
// }

// playGame();
