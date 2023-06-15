function getComputerChoice() {
    // return a random indextion from 0 to 2
    let choiceIndex = Math.floor(Math.random() * 3);
    return choiceIndex;
}

function translateIndex(index) {
    switch(index) {
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissor";
            break;
        default:
            return "Rock";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 0 && computerSelection == 2) {
        playerSelection = 3;
    } else if (computerSelection == 0 && playerSelection == 2) {
        computerSelection = 3;
    }
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection > computerSelection) {
        return `You win, ${translateIndex(playerSelection)} beats ${translateIndex(computerSelection)}`;
    } else if (computerSelection > playerSelection) {
        return `You lose, ${translateIndex(computerSelection)} beats ${translateIndex(playerSelection)}`
    } else {
        return "Tie"
    }
}


let player = 2;
let computer = getComputerChoice();
console.log(playRound(player, computer));
