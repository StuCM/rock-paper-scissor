/* 
input users choice
check if input is correct, reenter if not
generate random choice for computer 
check if user beats, draws or loses
print message saying won, lost or go again*/
let playerScore = 0
let computerScore = 0

game()

function game()
{
    gameRunning = true;
    for (let i = 0; i < 5; i++) 
    {
        playRound(getPlayerChoice(), getComputerChoice())
        console.log("Player: " + playerScore + " Computer: " + computerScore + " Round: " + (i + 1))
    }
    while (gameRunning)
    {
        if (computerScore > playerScore)
        {
            console.log("You lose")
            gameRunning = false
        }
        else if (computerScore < playerScore)
        {
            console.log("You win!")
            gameRunning = false
        }
        else if (computerScore === playerScore)
        {
            console.log("It's a draw! Let's have a decider")
            playRound(getPlayerChoice(), getComputerChoice())
        }
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
            console.log("Computer chose rock, it's a draw!")
        }
        else if (computerSelection === "paper")
        {
            console.log("You lose, computer chose paper!")
            computerScore++
        }
        else
        {
            console.log("You won! Computer chose scissors")
            playerScore++
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            console.log("You won! Computer chose rock")
            playerScore++
        }
        else if (computerSelection === "paper")
        {
            console.log("Computer chose paper, it's a draw!")
        }
        else
        {
            console.log("You lose, Computer chose scissors")
            computerScore++
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            console.log("You lose, Computer chose rock")
            computerScore++
        }
        else if (computerSelection === "paper")
        {
            console.log("You won! Computer chose paper")
            playerScore++
        }
        else
        {
            console.log("Computer chose scissors, it's a draw!")
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

function getPlayerChoice()
{
    let playerSelection = prompt("Please enter your choice")
    playerSelection = checkInput(playerSelection)
    return playerSelection.toLowerCase()
}

function checkInput(selection)
{
    selection = selection.toLowerCase();
    if (selection !== "rock" && selection !== "paper" && selection !== "scissors")
    {
        const newSelection = prompt("Incorrect input please choose between rock, paper and scissor")
        return checkInput(newSelection)
    }
    else
    {
        return selection;
    }
}