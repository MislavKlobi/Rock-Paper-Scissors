let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice = Math.floor(Math.random() * 3) + 1;
let humanChoice = prompt("please enter Rock, Paper or Scissors : ").toLowerCase();
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    computerChoice;

    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else if (computerChoice === 3) {
        return scissors;
    }
}



function getHumanChoice() {
    humanChoice;

    if (humanChoice === rock.toLowerCase() || humanChoice === paper.toLowerCase() || humanChoice === scissors.toLowerCase()) {
        return console.log("Spieler: " + humanChoice);
    } else {
        return console.log("eingabe ungültig");
    }

}


function playRound(humanChoice, computerChoice) {
     if (humanChoice === computerChoice){
        return console.log("Wow, it's a draw ");
    }
    
    if ((humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper)
    ) {
        return console.log("You Win! ${humanChoice} + ");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
console.log("Compuer: " + getComputerChoice());