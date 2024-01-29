console.log("Welcome to Rock Paper Scissors, you'll play here in the console");
let computerSelection;
let playerSelection;

function getComputerChoice(){
    computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0){
        computerSelection = "Rock"
    } else if (computerSelection == 1){
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    return computerSelection;
}

console.log(getComputerChoice(computerSelection));