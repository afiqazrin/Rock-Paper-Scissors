let playerScore = 0;
let computerScore = 0;

const startContainer = document.querySelector('.start-container');
const startButton = document.querySelector('.start-btn');
const gameContainer = document.querySelector('.game-container');
const outcomeContainer = document.querySelector('.outcome-container');
const pPlayer = document.querySelector('.player-score');
const pComputer = document.querySelector('.computer-score');
const pStatus = document.querySelector('.pStatus');
const h2Result = document.querySelector('.h2Result');
const buttonRestart = document.querySelector('.restart');
const gameButtons = document.querySelectorAll('div.game-container button');

gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = `${button.id}`;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkScore(playerScore, computerScore);
        updateScore(playerScore, computerScore);
    });
});
startButton.addEventListener('click', () => {
    startContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
});
buttonRestart.addEventListener('click', ()=>
{
    startContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    outcomeContainer.classList.add('hidden');
});

function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    const selection = array[Math.floor(Math.random() * array.length)]
    console.log("Computer selection: ", selection);
    return selection;
}


function checkWinner(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "Player";
    }
    else {
        computerScore++
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        pStatus.textContent = `It's a tie! You both chose ${playerSelection}!`;
    }
    else if (result == "Player") {
        pStatus.textContent = `You've won! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        pStatus.textContent = `You've lost! ${computerSelection} beats ${playerSelection}!`;
    }
}

function updateScore(player, computer) {
    pPlayer.textContent = `Player Score: ${player}`;
    pComputer.textContent = `Computer Score: ${computer}`;
}
function checkScore(player, computer) {
    if (player === 5) {
        playerScore = 0;
        computerScore = 0;
        pStatus.textContent = '';
        startContainer.classList.add('hidden');
        gameContainer.classList.add('hidden');
        outcomeContainer.classList.remove('hidden');
        h2Result.textContent = 'Congratulations! You won!'
        buttonRestart.classList.remove('hidden');
    }
    else if (computer === 5) {
        playerScore = 0;
        computerScore = 0;
        pStatus.textContent = '';
        startContainer.classList.add('hidden');
        gameContainer.classList.add('hidden');
        outcomeContainer.classList.remove('hidden');
        h2Result.textContent = 'Try again! Computer won!'
        buttonRestart.classList.remove('hidden');
    }

}
