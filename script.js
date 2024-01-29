console.log("Welcome to Rock Paper Scissors, you'll play here in the console");
//Declaring variables
let computerSelection;
let playerSelection;

//Creating computer's choice
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

//Function to get the player's choice
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

//Testing the results and returned values of each function
console.log(getComputerChoice(computerSelection));
console.log(getPlayerChoice(playerSelection));