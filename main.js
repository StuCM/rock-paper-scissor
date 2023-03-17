/* 
input users choice
check if input is correct, reenter if not
generate random choice for computer 
check if user beats, draws or loses
print message saying won, lost or go again*/
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button')
const results = document.querySelector('#results')
const playerScoreText = document.querySelector('.playerScore')
const computerScoreText = document.querySelector('.computerScore')
const start = document.querySelector('.start')
let computerUI = document.querySelector('#computerPick')

start.addEventListener('click', () =>{
    for (i=0;i<buttons.length-1;i++){
        buttons[i].className = "";
    }
    
    document.getElementById('rock').classList.add('btn-choice', 'btn-rock')
    document.getElementById('paper').classList.add('btn-choice', 'btn-paper')
    document.getElementById('scissors').classList.add('btn-choice', 'btn-scissors')
    playGame();
});

function playGame() {
    start.textContent = 'Reset';
    computerScore = 0;
    playerScore = 0;
    buttons.forEach(button => button.addEventListener('click', clickButton))
    playerScoreText.textContent = playerScore;    
    computerScoreText.textContent = computerScore;  
    results.textContent = "Let the game begin!"; 
}

function clickButton(e){
    if (e.explicitOriginalTarget.id === 'Start Game')
    {
        return null;
    }
    const playerPick = e.explicitOriginalTarget.id;
    results.textContent = playRound(playerPick, getComputerChoice())
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    checkWinner(playerScore, computerScore);
}

function gameScore(winner){
    
    if (winner === 'player')
    {
        playerScore++
    }
    else if (winner === 'computer')
    {
        computerScore++
    }
}

function checkWinner(playerScore, ComputerScore)
{
    let gameOver = false;

    if(playerScore === 5)
    {
        buttons.forEach(button => button.removeEventListener('click', clickButton))
        results.textContent = "You have won!!";
        stopButtons();
    }
    else if(computerScore === 5)
    {
        buttons.forEach(button => button.removeEventListener('click', clickButton))
        results.textContent = "You have lost!";
        stopButtons();
    }    
}

function stopButtons() {
    for (i=0;i<buttons.length-1;i++){
        buttons[i].className = "";
    }
    document.getElementById('rock').classList.add('btn-choice', 'rock-plain')
    document.getElementById('paper').classList.add('btn-choice', 'paper-plain')
    document.getElementById('scissors').classList.add('btn-choice', 'scissors-plain')
}

function playRound(playerSelection, computerSelection)
{
    console.log("Your pick: " + playerSelection)
    console.log("Computers pick: " + computerSelection)
    
    if (playerSelection === "rock")
    {
        if (computerSelection === "rock")
        {
            return("Computer chose rock, it's a draw!")
        }
        else if (computerSelection === "paper")
        {
            gameScore('computer')
            return("You lose, computer chose paper!")
            
        }
        else
        {
            gameScore('player')
            return("You won! Computer chose scissors")
            
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            gameScore('player')
            return("You won! Computer chose rock")
            
        }
        else if (computerSelection === "paper")
        {
            return("Computer chose paper, it's a draw!")
        }
        else
        {
            gameScore('computer')
            return("You lose, Computer chose scissors")
            
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            gameScore('computer')
            return("You lose, Computer chose rock")
            
        }
        else if (computerSelection === "paper")
        {
            gameScore('player')
            return("You won! Computer chose paper")
            
        }
        else
        {
            return("Computer chose scissors, it's a draw!")
        }
    }
    else {console.log("error")}

}

function getComputerChoice() 
{
    const computerChoice = ["rock", "paper", "scissors"]
    let randomPick = Math.floor(Math.random() * 3)
    let computerPick = computerChoice[randomPick]

    if (computerPick == "rock") {
        computerUI.className = ""
        computerUI.classList.add("rock-plain")
        computerUI.classList.add("btn-choice")
    }
    else if (computerPick == "paper") {
        computerUI.className = ""
        computerUI.classList.add("paper-plain")
        computerUI.classList.add("btn-choice")
    }
    if (computerPick == "scissors") {
        computerUI.className = ""
        computerUI.classList.add("scissors-plain")
        computerUI.classList.add("btn-choice")
    }

    return computerPick;
}