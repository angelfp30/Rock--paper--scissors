
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
const scores = document.querySelector('#results');

//Conditions of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        loseCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, paper wins to rock!";
        
        div.appendChild(phrase);
        
        scores.appendChild(div);


    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, rock wins to scissors!";
        
        div.appendChild(phrase);
        scores.appendChild(div);


    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked rock, it's a tie!"
        
        div.appendChild(phrase);
        scores.appendChild(div);

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, paper wins to rock!";
        
        div.appendChild(phrase);
        scores.appendChild(div);

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        loseCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, scissors wins to paper!"
        
        div.appendChild(phrase);
        scores.appendChild(div);
       
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked paper, it's a tie!";
        
        div.appendChild(phrase);
        scores.appendChild(div);

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        loseCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, rock wins to scissors!"
        
        div.appendChild(phrase);
        scores.appendChild(div);

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, scissors wins to paper!"
        
        div.appendChild(phrase);
        scores.appendChild(div);
        

    } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked scissors, it's a tie!"
        
        div.appendChild(phrase);
        scores.appendChild(div);
    }
}

//Changed the console fuction for buttons

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () =>
{
    getComputerChoice()
    playerSelection = "Rock";
    playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener("click", () =>
{
    getComputerChoice()
    playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
})

sciBtn.addEventListener("click", () =>
{
    getComputerChoice()
    playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
        
})




//Function to make the 5 round game
/*function playGame(){
        
    if (winCount > loseCount) {
        console.log("You won!!!");
    } else {
        console.log("You lose :(");
    }
}*/
//Calling the function




