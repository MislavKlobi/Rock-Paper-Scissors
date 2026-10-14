console.log("Hello World!");
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else if (computerChoice === 3) {
        return scissors;
    }
}



function getHumanChoice() {
    let humanChoice = prompt("please enter Rock, Paper or Scissors : ");

    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) {
        return console.log(humanChoice);
    } else {
        return console.log("eingabe ungültig");
    }

}


function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);