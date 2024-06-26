
let humanScore = 0;
let computerScore = 0;


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
            console.log('You lose ! ' + computerChoice + ' beats ' + humanChoice);
            computerScore++;
            break;
        case 0:
            console.log('Draw !');
            break;
        case 1:
            console.log('You Win ! ' + humanChoice + ' beats ' + computerChoice);
            humanScore++;
            break;
    }

}

function playGame() {
    let n = 0
    while (n < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log('You : ' + humanScore + ' Computer : ' + computerScore);
        n++
    }
    console.log('Your Score : ' + humanScore + ' Computer\'s score : ' + computerScore);
    if (humanScore > computerScore) {
        console.log('Congratulation ! You Won the game !')
    } else if (computerScore > humanScore) {
        console.log('Too bad you lost the game...')
    } else {
        console.log('Draw !!!')

    }
}

playGame()