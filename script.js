let humanScore = 0;
let computerScore = 0;

const result = document.createElement("div");

function getComputerChoice() {
    let cChoice = Math.random();
    if (cChoice <= 1/3) return 'rock';
    else if (1/3 < cChoice && cChoice <= 2/3) return 'paper';
    else if (2/3 < cChoice) return 'scissors';
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Invalid input, skipping this round.");
        return;
    }

    let humChoice = humanChoice.toLowerCase();
    let compChoice= computerChoice.toLowerCase();
    let message = '';

    switch(compChoice) {
        case 'rock':
            if (humChoice === 'rock') message = "It's a tie! Let's go for another round!";
            else if (humChoice === 'paper') {
                message = "You win! Paper beats rock!";
                humanScore++;
            }
            else if (humChoice === 'scissors') {
                message = "You lose! Rock beats scissors!";
                computerScore++;
            }
            break;
        case 'paper':
            if (humChoice === 'rock') {
                message = "You lose! Paper beats rock!";
                computerScore++;
            }
            else if (humChoice === 'paper') message = "It's a tie! Let's go for another round!";
            else if (humChoice === 'scissors') {
                message = "You win! Scissors beat paper!";
                humanScore++;
            }
            break;
        case 'scissors':
            if (humChoice === 'rock') {
                message = "You win! Rock beats scissors!";
                humanScore++;
            }
            else if (humChoice === 'paper') {
                message = "You lose! Scissors beat paper!";
                computerScore++;
            }
            else if (humChoice === 'scissors') message = "It's a tie! Let's go for another round!";
            break;
    }

    if (humanScore === 5) {
        result.innerHTML = `Congratulations! You are the winner!<br>Final score:<br>You: ${humanScore} - Computer: ${computerScore}`;
        disableButtons();
        return;
    }

    if (computerScore === 5) {
        result.innerHTML = `Game over! The computer wins.<br>Final score:<br>You: ${humanScore} - Computer: ${computerScore}`;
        disableButtons();
        return;
    }

    result.innerHTML = `${message}<br>The result is:<br>You: ${humanScore} - Computer: ${computerScore}`;
}

const choices = ["Rock", "Paper", "Scissors"];
choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => playRound(choice, getComputerChoice()));
    document.body.appendChild(button);
})

function disableButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

document.body.appendChild(result);
