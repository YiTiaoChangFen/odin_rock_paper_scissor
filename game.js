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
    let winner = getWinner(playerSelection, computerSelection);
    if (winner > 0) {
        return `You win, ${translateIndex(playerSelection)} beats ${translateIndex(computerSelection)}`;
    } else if (winner < 0) {
        return `You lose, ${translateIndex(computerSelection)} beats ${translateIndex(playerSelection)}`
    } else {
        return "Tie"
    }
}

function getPlayerChoice() {
    let player = window.prompt("Choose your play");
    switch (player.toLowerCase()) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissor":
            return 2;
            break;
    }
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection == 0 && computerSelection == 2) {
        playerSelection = 3;
    } else if (computerSelection == 0 && playerSelection == 2) {
        computerSelection = 3;
    }
    
    return playerSelection - computerSelection;
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let playerChoice = null;
    let computerChoice = null;

    
    let index = 0;
    while (index < 5) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        let winner = getWinner(playerChoice, computerChoice);
        if(winner > 0) {
            ++playerWin;
        } else if (winner < 0) {
            ++computerWin;
        }
        ++index;
    }

    console.log(`You won ${playerWin} rounds.`);
    console.log(`Computer won ${computerWin} rounds.`);
}

game();