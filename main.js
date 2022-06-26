/*
let playerSelection;
let playerScore = 0, computerScore = 0;
let selectionArr = ['rock','paper','scissors'];

function computerSelection(){
    const randomIndex = Math.floor(Math.random() * 3);
    return selectionArr[randomIndex];
}

function playround(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return `${playerSelection} vs ${computerSelection}\nIts a tie`;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nComputer wins this round`;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nPlayer1 wins this round`;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nPlayer1 wins this round`;
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nComputer wins this round`;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nComputer wins this round`;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore += 1;
        return `${playerSelection} vs ${computerSelection}\nPlayer1 wins this round`;
    }
    else{
        return "invalid selection";
    }
}

function game(){
    //initialize round counter 'i'
    while(playerScore < 5 && computerScore < 5){
        playerSelection = prompt("Rock Paper Scissors").toLowerCase();
        console.log(playround(playerSelection,computerSelection()));
        console.log(`Player Score: ${playerScore}  Computer Score: ${computerScore}`);
    }
}
console.log(game());
*/

let computerSelectionVar;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let result = document.getElementById('results');
let playerScore = 0, computerScore = 0;
let playerScoreLocation = document.getElementById('playerScore');
let computerScoreLocation = document.getElementById('computerScore');
console.log(rock);

let selectionArr = ['rock','paper','scissors'];

function computerSelection(){
    const randomIndex = Math.floor(Math.random() * 3);
    return selectionArr[randomIndex];
}
rock.addEventListener('click',function (){
    computerSelectionVar = computerSelection();
    
    if(computerSelectionVar == 'rock'){
        result.textContent = 'Rock vs Rock, Its a tie.';
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Rock vs Paper, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Rock vs Scissors, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    
});

paper.addEventListener('click',function (){
    computerSelectionVar = computerSelection();

    if(computerSelectionVar == 'rock'){
        result.textContent = 'Paper vs Rock, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Paper vs Paper, Its a tie.';
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Paper vs Scissors, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    
});

scissors.addEventListener('click',function (){
    computerSelectionVar = computerSelection();
    
    if(computerSelectionVar == 'rock'){
        result.textContent = 'Scissors vs Rock, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Scissors vs Paper, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Scissors vs Scissors, Its a tie.';
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }
    
});

if(computerScore > 4 || playerScore > 4){
    let replay = confirm("Play Again?");
    if(replay == true){
        playerScore = 0;
        computerScore = 0;
    }else{
        rock = undefined;
        paper = undefined;
        scissors = undefined;
    }
}