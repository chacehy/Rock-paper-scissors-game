
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerScore = 0;
let pcScore = 0;
function getPcChoice(){
    let pcChoice = Math.floor(Math.random() * 3)
    if(pcChoice === 0){
        return rock
    }else if(pcChoice === 1){
        return paper
    }else if(pcChoice=== 2){
        return scissors
    }
} 


let computerSelection = getPcChoice()

function game(computerSelection, playerSelection){
    computerSelection = getPcChoice();
    playerSelection = prompt("choose your righteous weapon");
    if ((playerSelection === rock && computerSelection == scissors) 
    || (playerSelection === scissors && computerSelection == paper)
    || (playerSelection === paper && computerSelection == rock)){ 
        playerScore++
        console.log(`player scores, current score : ${playerScore} : ${pcScore}`)
    
}else if ((computerSelection == rock && playerSelection == scissors) 
        || (computerSelection == scissors && playerSelection == paper)
        || (computerSelection == paper && playerSelection == rock)){
        pcScore++
        console.log(`bot scores, current score : ${playerScore} : ${pcScore}`)
}
else{
    console.log('that was a tie')

}

}


while((playerScore < 5) && (pcScore < 5) ){
    game();
}

if (playerScore == 5){
    window.alert("YOU WIN")
}else if (pcScore ==  5){
    window.alert("YOU LOOOOOOOSE")
}


