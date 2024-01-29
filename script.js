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
let winCount;
let loseCount;

//Conditions of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        loseCount++
        return "You lose, paper wins to rock!";

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winCount++
        return "You win, rock wins to scissors!"

    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "Both picked rock, it's a tie!"

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winCount++
        return "You win, paper wins to rock!";

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        loseCount++
        return "You lose, scissors wins to paper!"

    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "Both picked paper, it's a tie!"

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        loseCount++
        return "You lose, rock wins to scissors!"

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winCount++
        return "You win, scissors wins to paper!"

    } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Both picked scissors, it's a tie!"
    }
}
//Function to make the 5 round game
function playGame(){
        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    
    
    if (winCount > loseCount) {
        console.log("You won!!!");
    } else {
        console.log("You lose :(");
    }
}
//Calling the function
playGame();



