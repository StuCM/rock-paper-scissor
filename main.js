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

start.addEventListener('click', playGame);

function playGame() {
    start.textContent = 'Reset';
    computerScore = 0;
    playerScore = 0;
    buttons.forEach(button => button.addEventListener('click', clickButton))
    playerScoreText.textContent = "Player: " + playerScore;    
    computerScoreText.textContent = "Computer: " + computerScore;  
    results.textContent = "Let the game begin!"; 
}

function clickButton(e){
    if (e.explicitOriginalTarget.id === 'Start Game')
    {
        return null;
    }
    const playerPick = e.explicitOriginalTarget.id;
    results.textContent = playRound(playerPick, getComputerChoice())
    playerScoreText.textContent = "Player: " + playerScore;
    computerScoreText.textContent = "Computer: " + computerScore;
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
    if(playerScore === 5)
    {
        buttons.forEach(button => button.removeEventListener('click', clickButton))
        results.textContent = "You have won!!";
    }
    else if(computerScore === 5)
    {
        buttons.forEach(button => button.removeEventListener('click', clickButton))
        results.textContent = "You have lost!";
    }
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

    return computerPick;
}