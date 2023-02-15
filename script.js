let playerScore = 0;
let computerScore = 0;

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const div = document.createElement('div');
const pPlayer = document.createElement('p');
const pComputer = document.createElement('p');
const h2Result = document.createElement('h2');
const pStatus = document.createElement('p');
div.append(pPlayer);
div.append(pComputer);
div.append(pStatus);
div.append(h2Result);

document.body.append(div);

buttonRock.addEventListener('click', playGameRock);
buttonPaper.addEventListener('click', playGamePaper);
buttonScissors.addEventListener('click', playGameScissors);

function playGameRock(){
    h2Result.textContent = "";
    playerSelection = "rock"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkScore(playerScore, computerScore);
    updateScore(playerScore, computerScore);
}

function playGamePaper(){
    h2Result.textContent = "";
    playerSelection = "paper"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkScore(playerScore, computerScore);
    updateScore(playerScore, computerScore);
}

function playGameScissors(){
    h2Result.textContent = "";
    playerSelection = "scissors"
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkScore(playerScore, computerScore);
    updateScore(playerScore, computerScore);
}

function getComputerChoice () {
    const array = ['rock','paper','scissors'];
    const selection = array[Math.floor(Math.random()* array.length)]
    console.log("Computer selection: ", selection);
    return selection;
}


function checkWinner(playerSelection, computerSelection) {

    if(playerSelection==computerSelection)
    {
        return "Tie";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        return "Player";
    }
    else{
        computerScore++
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection)
{
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie")
    {
        pStatus.textContent = `It's a tie! You both chose ${playerSelection}!`;
    }
    else if(result == "Player")
    {
        pStatus.textContent = `You've won! ${playerSelection} beats ${computerSelection}!`;
    }
    else{
        pStatus.textContent = `You've lost! ${computerSelection} beats ${playerSelection}!`;
    }
}

function updateScore(player, computer)
{
    pPlayer.textContent = `Player Score: ${player}`;
    pComputer.textContent = `Computer Score: ${computer}`;
}
function checkScore(player, computer)
{
    if(player==5)
    {
        playerScore = 0;
        computerScore = 0;
        pPlayer.textContent = "";
        pComputer.textContent = "";
        pStatus.textContent = "";
        h2Result.textContent = "Congratulations! You won!";
    }
    else if(computer == 5)
    {
        playerScore = 0;
        computerScore = 0;
        pPlayer.textContent = "";
        pComputer.textContent = "";
        pStatus.textContent = "";
        h2Result.textContent = "Try again! Computer won!";
    }
    
}
