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

    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) {    // .toLowerCase() makes all chars to lower case 
        console.log("Spieler: " + humanChoice.toLowerCase());
        return humanChoice;
    } else {
        console.log("eingabe ungültig");
        return null;
    }

}


function playRound(humanChoice, computerChoice) {
     if (humanChoice === computerChoice){
        console.log(`Wow, it's a draw ${humanChoice}`);
        return;
    }
    
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}





const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

console.log("Compuer: " + getComputerChoice());
console.log("Score: " + "Human: " + humanScore + " " + "Computer: " + computerScore);