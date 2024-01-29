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

//Stating the results of the previous functions
getComputerChoice(computerSelection);
getPlayerChoice(playerSelection);

//Conditions of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose, paper wins to rock!";

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win, rock wins to scissors!"

    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "Both picked rock, it's a tie!"

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win, paper wins to rock!";

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose, scissors wins to paper!"

    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "Both picked paper, it's a tie!"

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose, rock wins to scissors!"

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win, scissors wins to paper!"

    } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Both picked scissors, it's a tie!"
    }
}

//Final result
console.log(playRound(playerSelection, computerSelection));