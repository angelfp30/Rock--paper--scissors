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

function getPlayerChoice(){
    playerSelection = 
    prompt("Make your choice!").toLowerCase();
    switch (playerSelection){
        case "rock":
            playerSelection = "Rock"
        break;
        case "paper":
            playerSelection = "Paper"
        break;
        case "scissors":
            playerSelection = "Scissors"
        break;
        default:
            alert("Enter the required value, reload the web"); 
        break;
    }
    return playerSelection;
}

console.log(getComputerChoice(computerSelection));
console.log(getPlayerChoice(playerSelection));