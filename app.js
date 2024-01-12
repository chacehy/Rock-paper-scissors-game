
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return rock
    }else if(computerChoice === 1){
        return paper
    }else if(computerChoice=== 2){
        return scissors
    }
} 


let computerSelection = getComputerChoice()

function game(computerSelection, playerSelection){

    computerSelection = getComputerChoice();
    playerSelection = prompt("choose your righteous weapon");
    if ((playerSelection === rock && computerSelection == scissors) 
    || (playerSelection === scissors && computerSelection == paper)
    || (playerSelection === paper && computerSelection == rock)){ 
        playerScore++
        console.log(`player scores, current score : ${playerScore} : ${computerScore}`)
    
}else if ((computerSelection == rock && playerSelection == scissors) 
        || (computerSelection == scissors && playerSelection == paper)
        || (computerSelection == paper && playerSelection == rock)){
        computerScore++
        console.log(`computer scores, current score : ${playerScore} : ${computerScore}`)
}
else{
    console.log('that was a tie')

}

}


while((playerScore < 5) && (computerScore < 5) ){
    game();
}

if (playerScore == 5){
    window.alert("YOU WIN")
    console.log('player won')
}else if ( computerScore ==  5){
    window.alert("YOU LOSE")
    console.log('computer won')
}


