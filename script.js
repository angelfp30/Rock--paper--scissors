
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



//Stating the results of the previous functions
getComputerChoice(computerSelection);
//getPlayerChoice(playerSelection);
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

//Changed the console fuction for buttons

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () =>
{
        playerSelection = "Rock";
        playRound();
})

paperBtn.addEventListener("click", () =>
{
        playerSelection = "Paper";
        playRound();
})

sciBtn.addEventListener("click", () =>
{
        playerSelection = "Scissors";
        playRound();
})

function displayResults(){

    const div = document.createElement('div');
    

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



