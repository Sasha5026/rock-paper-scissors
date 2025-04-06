let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cChoice = Math.random();
    if (cChoice <= 1/3) return 'Rock';
    else if (1/3 < cChoice <= 2/3) return 'Paper';
    else return 'Scissors';
}

function getHumanChoice() {
    let hChoice = prompt("Rock, paper, scissoooors");
    return hChoice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
