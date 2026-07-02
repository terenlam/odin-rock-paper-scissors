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

function playRound(humanSelection, computerSelection) {
  humanSelection = humanSelection.toLowerCase();

  console.log("Computer's choice: " + computerSelection);
  console.log("Human's choice: " + humanSelection);

  if (humanSelection === "rock" && computerSelection === "scissor") {
    ++humanScore;
    return `
    You win! Rock beats Scissor.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    ++humanScore;
    return `
    You win! Paper beats Rock.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === "scissor" && computerSelection === "paper") {
    ++humanScore;
    return `
    You win! Scissor beats Paper.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    ++computerScore;
    return `
    You lose! Paper beats Rock.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === "paper" && computerSelection === "scissor") {
    ++computerScore;
    return `
    You lose! Scissor beats Paper.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === "scissor" && computerSelection === "rock") {
    ++computerScore;
    return `
    You lose! Rock beats Scissor.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else if (humanSelection === computerSelection) {
    return `
    Draw!
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  } else {
    return `
    Invalid choice.
    Human's score: ${humanScore}
    Computer's score: ${computerScore}`;
  }
}

function getWinner() {
  if (humanScore > computerScore) {
    return "You win!";
  } else if (humanScore < computerScore) {
    return "You lose!";
  } else if (humanScore === computerScore) {
    return "Draw!";
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Game ${i}`);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
  console.log(getWinner());
}

playGame();
