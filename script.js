

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
    {
        return "Tie";
    }
    else if (
        playerSelection == "Rock" && computerSelection == "Scissors" || 
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper"
    ) {
        return "Player";
    }
    else{
        return "Computer";
    }
}
function getPlayerChoice() {
    validatedInput = false;
    while(validatedInput==false){
        const playerInput = prompt("Rock, Paper, Scissors");
        if(playerInput == null)
        {
            continue;
        }
        const playerInputInLower = playerInput.toLowerCase();
        const playerInputinCommon = playerInputInLower.charAt(0).toUpperCase() + playerInputInLower.slice(1);
        if(choices.includes(playerInputinCommon)){
            validatedInput = true;
            return playerInputinCommon;
        }
    }

}
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie")
    {
        console.log(`It's a tie! You both chose ${playerSelection}!`);
    }
    else if(result == "Player"){
        console.log(`You've won! ${playerSelection} beats ${computerSelection}!`);
    }
    else{
        console.log(`You've lost! ${computerSelection} beats ${playerSelection}!`);
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        const playerSelection = "Rock";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if(checkWinner(playerSelection, computerSelection) == "Player")
        {
            playerScore++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer")
        {
            computerScore++;
        }
       else{

       }
}
    if(playerScore>computerScore)
    {
        console.log("Player has won!");
    }
    else if(computerScore>playerScore){
        console.log("Computer has won!");
    }
    else
    {
        console.log("It's a tie!");
    }
}
game();
console.log("----------------")