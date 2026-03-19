let humanScore = 0;
let computerScore = 0;

console.log(playGame());



function getComputerChoice() {
    const max = 3;
    const num= Math.floor(Math.random() * max);
    if (num == 0) {
        return ("rock");
    }

    if (num == 1) {
        return ("paper");
    }

    if (num == 2) {
        return ("scissors");
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        return computerScore ++;
    }

    if (humanChoice== "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        return computerScore ++; 
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        return computerScore ++; 
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        return humanScore ++;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore ++;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        return humanScore ++;
    }

    if (humanChoice == computerChoice) {
        console.log ("It's a tie!")
        return;
    }
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);

    }

    if (humanScore > computerScore ) {
        return( "You win! The score was Human Score: " + humanScore + " to Computer Score: " + computerScore + ".")
    }

    if (computerScore > humanScore ) {
        return( "You lose. The score was Human Score: " + humanScore + " to Computer Score: " + computerScore + ".")
    }

    if (computerScore == humanScore) {
        return ("It's a tie! The score was Human Score: " + humanScore + " to Computer Score: " + computerScore + ".")
    }

}