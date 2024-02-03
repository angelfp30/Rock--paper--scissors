
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


let winCount = 0;
let pcWinCount = 0;
const scores = document.querySelector('#scores');

//Conditions of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        pcWinCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, paper wins to rock!";
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, rock wins to scissors!";
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked rock, it's a tie!"
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, paper wins to rock!";
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        pcWinCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, scissors wins to paper!"
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);
       
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked paper, it's a tie!";
        
        div.appendChild(phrase);
        scores.appendChild(div);
        
        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        pcWinCount++
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You lose, rock wins to scissors!"
        
        div.appendChild(phrase);
        scores.appendChild(div);

        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winCount++

        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "You win, scissors wins to paper!"
        
        div.appendChild(phrase);
        scores.appendChild(div);
        
        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);

    } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        const div = document.createElement('div');
        const phrase = document.createElement('p');
        phrase.textContent = "Both picked scissors, it's a tie!"
        
        div.appendChild(phrase);
        scores.appendChild(div);
        
        const results = document.createElement("p");
        results.textContent = " Your score: " + winCount + "  Computer score: " + pcWinCount;
        scores.appendChild(results);
    }
    endGame();
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

const container = document.querySelector('#container');

const finalText = document.createElement('h3');
scores.appendChild(finalText);

if (winCount === 5 || pcWinCount === 5) {
    endGame();
    rockBtn.setAttribute("disabled");
    paperBtn.setAttribute("disabled");
    sciBtn.setAttribute("disabled");
}

function endGame(){

    if (winCount === 5 || pcWinCount === 5) {

        if (winCount === 5) {
            finalText.textContent = "You won!!! LETSGOO"
        } else {
            finalText.textContent = "You lose :("
        }
        rockBtn.setAttribute("disabled", "");
        paperBtn.setAttribute("disabled", "");
        sciBtn.setAttribute("disabled", "");
        
        const newGame = document.createElement("button");
        newGame.textContent = "Play Again?"
        container.appendChild(newGame);
    }

}


