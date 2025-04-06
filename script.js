let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cChoice = Math.random();
    if (cChoice <= 1/3) return 'rock';
    else if (1/3 < cChoice && cChoice <= 2/3) return 'paper';
    else if (2/3 < cChoice) return 'scissors';
}

function getHumanChoice() {
    let hChoice = prompt("Rock, paper, scissoooors");
    if(hChoice === null) return "";
    return hChoice;
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Invalid input, skipping this round.");
        return;
    }
    let humChoice = humanChoice.toLowerCase();
    let compChoice= computerChoice.toLowerCase();
    switch(compChoice) {
        case 'rock':
            if (humChoice === 'rock') console.log("It's a tie! Let's go for another round!");
            else if (humChoice === 'paper') {
                console.log("You win! Paper beats rock!");
                humanScore++;
            }
            else if (humChoice === 'scissors') {
                console.log("You lose! Rock beats scissors!");
                computerScore++;
            }
            break;
        case 'paper':
            if (humChoice === 'rock') {
                console.log("You lose! Paper beats rock!");
                computerScore++;
            }
            else if (humChoice === 'paper') console.log("It's a tie! Let's go for another round!");
            else if (humChoice === 'scissors') {
                console.log("You win! Scissors beat paper!");
                humanScore++;
            }
            break;
        case 'scissors':
            if (humChoice === 'rock') {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
            else if (humChoice === 'paper') {
                console.log("You lose! Scissors beat paper!");
                computerScore++;
            }
            else if (humChoice === 'scissors') console.log("It's a tie! Let's go for another round!");
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {    
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log('The result is:\n' + 'You: ' + humanScore + '\nComputer: ' + computerScore + '\n');
    }
}

playGame();



