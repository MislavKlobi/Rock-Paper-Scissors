let rock = "rock";
let paper = "paper";
let scissors = "scissors";




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
    let humanChoice = prompt("please enter Rock, Paper or Scissors : ").toLowerCase();
    if (!humanChoice) return null;

    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) {    // .toLowerCase() makes all chars to lower case 
        console.log("Spieler: " + humanChoice.toLowerCase());
        return humanChoice;
    } else {
        console.log("Eingabe ungültig");
        return null;
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
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
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log("Computer: " + computerSelection);

        playRound(humanSelection, computerSelection);
        
        console.log("Score: " + "Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if(humanScore > computerScore){
        console.log("You Won!");
    } else {
        console.log("You Lost!");
    }
    

}


playGame();