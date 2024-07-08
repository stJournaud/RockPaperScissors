
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("resultDiv");
const score = document.getElementById("score")

function getComputerChoice() {
    let result = ""
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
    }
    return result;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = 0;
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            result = 0;
        } else if (computerChoice === 'paper') {
            result = -1;
        } else {
            result = 1;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 1;
        } else if (computerChoice === 'paper') {
            result = 0;
        } else {
            result = -1;
        }
    } else {
        if (computerChoice === 'rock') {
            result = -1;
        } else if (computerChoice === 'paper') {
            result = 1;
        } else {
            result = 0;
        }
    }

    switch (result) {
        case -1:
            resultDiv.innerText = 'You lose ! ' + computerChoice + ' beats ' + humanChoice;
            computerScore++;
            break;
        case 0:
            resultDiv.innerText = 'Draw !';
            break;
        case 1:
            resultDiv.innerText = 'You Win ! ' + humanChoice + ' beats ' + computerChoice;
            humanScore++;
            break;
    }
    score.innerText = 'You ' + humanScore + ' | ' + computerScore + ' Computer';
    if (humanScore >= 5) score.innerText = 'You Win ! ' + 'You ' + humanScore + ' | ' + computerScore + ' Computer';
    if (computerScore >= 5) score.innerText = 'Computer Win ! ' + 'You ' + humanScore + ' | ' + computerScore + ' Computer';
}


rockBtn.addEventListener("click", () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener("click", () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound('scissors', getComputerChoice()));