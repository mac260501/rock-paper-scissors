function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random() * 2);
    if (computerChoice === 0)
    {
        computerChoice = "ROCK";
    }
    else if (computerChoice === 1)
    {
        computerChoice = "PAPER";
    }
    else // computerChoice === 2
    {
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function getPlayerChoice()
{
    let playerChoice = prompt("Choose: rock, paper, or scissors?");
    if (playerChoice === null)
    {
        return;
    }

    while ( playerChoice.toUpperCase() !== "ROCK" && 
            playerChoice.toUpperCase() !== "PAPER" && 
            playerChoice.toUpperCase() !== "SCISSORS")
    {
        playerChoice = prompt("Error: invalid input. Please pick again: rock, paper, or scissors?");
        if (playerChoice === null)
        {
            return;
        }
    }
    return playerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === null)
    {
        return;
    }
    else if (playerSelection === computerSelection)
    {
        console.log("It's a tie!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    {
        console.log("You win! Rock beats scissors.");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER")
    {
        console.log("You lose :( Paper beats rock.");
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        console.log("You win! Paper beats rock.");
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS")
    {
        console.log("You lose :( Scissors beat paper.");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    {
        console.log("You win! Scissors beat paper.");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    {
        console.log("You lose :( Rock beats scissors.");
    }
}

function game()
{
    let computerSelection;
    let playerSelection;

    for (let i = 0; i < 5; i++)
    {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();