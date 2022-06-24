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
