let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cChoice = Math.random();
    if (cChoice <= 1/3) return 'Rock';
    else if (1/3 < cChoice <= 2/3) return 'Paper';
    else if (2/3 < cChoice) return 'Scissors';
}

function getHumanChoice() {
    let hChoice = prompt("Rock, paper, scissoooors");
    return hChoice;
}

function playRound(humanChoice, computerChoice) {
    let humChoice = humanChoice.toLowerCase();
    let compChoice= computerChoice.toLowerCase();
    switch(compChoice) {
        case 'rock':
            if (humChoice === 'rock') console.log("It's a tie! Let's go for another round!");
            else if (humChoice === 'paper') console.log("You win! Paper beats rock!");
            else if (humChoice === 'scissors') console.log("You lose! Rock beats scissors!");
            break;
        case 'paper':
            if (humChoice === 'rock') console.log("You lose! Paper beats rock!");
            else if (humChoice === 'paper') console.log("It's a tie! Let's go for another round!");
            else if (humChoice === 'scissors') console.log("You win! Scissors beat paper!");
            break;
        case 'scissors':
            if (humChoice === 'rock') console.log("You win! Rock beats scissors!");
            else if (humChoice === 'paper') console.log("You lose! Scissors beat paper!");
            else if (humChoice === 'scissors') console.log("It's a tie! Let's go for another round!");
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

