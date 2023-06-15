function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3);
    console.log(choiceIndex);

    switch(choiceIndex) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissor";
            break;
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
