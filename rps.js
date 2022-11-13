function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice == 1) {
        return "rock";
    } else if(computerChoice == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won!";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!"
    }else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw!"
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost!"
    } else {
        return "Wrong input?"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));