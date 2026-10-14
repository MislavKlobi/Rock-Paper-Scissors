console.log("Hello World!");
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return rock;
    } else if (randomNumber === 2) {
        return paper;
    } else if (randomNumber === 3) {
        return scissors;
    }
}



function getHumanChoice() {
    let humanAnswer = prompt("please enter Rock, Paper or Scissors : ");

    if (humanAnswer === rock || humanAnswer === paper || humanAnswer === scissors) {
        return console.log(humanAnswer);
    } else  {
        return console.log("eingabe ungültig");
    }

}


function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);