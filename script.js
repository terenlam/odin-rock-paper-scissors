/*
GET computer choice
  SET x equal to a random number
  IF x is less than 1/3
    RETURN "rock"
  ELSE IF x less than 2/3
    RETURN "paper"
  ELSE
    RETURN "scissor"

GET human choice
  PROMPT user's input
  SET x equal to user's input
  RETURN x

SET computer score equal to 0
SET human score equal to 0

FUNCTION playROUND
  SET computer selection equal to computer choice
  SET human selection equal to human choice
  CONVERT human selection into lowercase
  IF human selection is equal to "rock" && computer selection is equal to "scissor"
    INCREMENT human score by 1
    return "You win! Rock beats Scissor."
  ELSE IF human selection is equal to "paper" && computer selection is equal to "rock"
    INCREMENT human score by 1
    return "You win! Paper beats Rock."
  ELSE IF human selection is equal to "scissor" && computer selection is equal to "paper"
    INCREMENT human score by 1
    return "You win! Scissor beats Paper."
  ELSE IF human selection is equal to "rock" && computer selection is equal to "paper"
    INCREMENT computer score by 1
    return "You lose! Paper beats Rock."
  ELSE IF human selection is equal to "paper" && computer selection is equal to "scissor"
    INCREMENT computer score by 1
    return "You lose! Scissor beats Paper."
  ELSE IF human selection is equal to "scissor" && computer selection is equal to "rock"
    INCREMENT computer score by 1
    return "You lose! Rock beats scissor."
  ELSE IF human selection is equal to computer selection
    return "Draw!"
  ELSE
    return "Invalid choice."
 */
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
