let computerSelectionVar;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let result = document.getElementById('results');
let playerScore = 0, computerScore = 0;
let playerScoreLocation = document.getElementById('playerScore');
let computerScoreLocation = document.getElementById('computerScore');

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
        if(computerScore > 4 || playerScore > 4){
            replay();
        }
        
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Rock vs Paper, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
           replay();
        }
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Rock vs Scissors, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
            replay();
        }
    }
    
});

paper.addEventListener('click',function (){
    computerSelectionVar = computerSelection();

    if(computerSelectionVar == 'rock'){
        result.textContent = 'Paper vs Rock, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
            replay();
        }
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Paper vs Paper, Its a tie.';
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
            replay();
        }
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Paper vs Scissors, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
            replay();
        };
    };
    
});

scissors.addEventListener('click',function (){
    computerSelectionVar = computerSelection();
    
    if(computerSelectionVar == 'rock'){
        result.textContent = 'Scissors vs Rock, Computer wins this round.';
        computerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
           replay();
        }
    }
    else if(computerSelectionVar == 'paper'){
        result.textContent = 'Scissors vs Paper, You win this round.';
        playerScore += 1;
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
           replay();
        }
    }
    else if(computerSelectionVar == 'scissors'){
        result.textContent = 'Scissors vs Scissors, Its a tie.';
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
        if(computerScore > 4 || playerScore > 4){
          replay();
        }
    }
    
});

function replay(){
    play = confirm(`Final Score\nPlayer: ${playerScore} Computer: ${computerScore}\nPLAY AGAIN?`);
    if(play == true){
        playerScore = 0;
        computerScore = 0;
        //Adding the next two lines so that the score display can change immediately you restart
        playerScoreLocation.textContent = playerScore;
        computerScoreLocation.textContent = computerScore;
    }else{
        rock = undefined;
        paper = undefined;
        scissors = undefined;
    }
}
