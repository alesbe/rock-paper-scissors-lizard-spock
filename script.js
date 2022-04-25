// Game vars
const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerOption, computerOption;
let playerWins, action;

// HTML elements
const wrapper = document.getElementById('wrapper');
const scorePlayer = document.getElementById('score-player');
const scoreComputer = document.getElementById('score-computer');
const resultText = document.getElementById('result__text');

// onClick function
function playerChoose(_playerOption) {
    playerOption = _playerOption;
    computerOption = computerChoose();

    let roundInfo = calculateWinner(playerOption, computerOption);

    animate(roundInfo);
}

function computerChoose() {
    return options[Math.floor(Math.random() * options.length)];
}


function animate(roundInfo) {
    switch (roundInfo.playerWins) {
        case true:
            // Update score
            scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;

            // Change background
            wrapper.style.backgroundColor = "rgba(0, 255, 0, 0.2)";

            // Change result text
            resultText.style.visibility = 'visible';
            resultText.textContent = `Yes! ${capitalize(playerOption)} ${roundInfo.action} ${capitalize(computerOption)}!`;
            break;
    
        case false:
            // Update score
            scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;

            // Change background
            wrapper.style.backgroundColor = "rgba(255, 0, 0, 0.2)";

            // Change result text
            resultText.style.visibility = 'visible';
            resultText.textContent = `Oh no! ${capitalize(computerOption)} ${roundInfo.action} ${capitalize(playerOption)}!`;
            break;

        case null:
            // Change background
            wrapper.style.backgroundColor = "rgb(255, 255, 255)";

            // Change result text
            resultText.style.visibility = 'visible';
            resultText.textContent = `It was a tie! ${capitalize(computerOption)} does nothing to ${capitalize(playerOption)}!`;
            break;
        default:
            break;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function calculateWinner(playerOption, computerOption) {
    if(playerOption == computerOption) {return {playerWins: null, action: null}}

    switch (playerOption + computerOption) {
        case "rockpaper":
            return {playerWins: false, action: "covers"};
        case "rockscissors":
            return {playerWins: true, action: "crushes"};
        case "rocklizard":
            return {playerWins: true, action: "crushes"};
        case "rockspock":
            return {playerWins: false, action: "vaporizes"};
        case "paperrock":
            return {playerWins: true, action: "covers"};
        case "paperscissors":
            return {playerWins: false, action: "cuts"};
        case "paperlizard":
            return {playerWins: false, action: "eats"};
        case "paperspock":
            return {playerWins: true, action: "covers"};
        case "scissorsrock":
            return {playerWins: false, action: "crushes"};
        case "scissorspaper":
            return {playerWins: true, action: "cuts"};
        case "scissorslizard":
            return {playerWins: true, action: "decapitates"};
        case "scissorsspock":
            return {playerWins: false, action: "smashes"};
        case "lizardrock":
            return {playerWins: false, action: "crushes"};
        case "lizardpaper":
            return {playerWins: true, action: "eats"};
        case "lizardscissors":
            return {playerWins: false, action: "decapitates"};
        case "lizardspock":
            return {playerWins: true, action: "poisons"};
        case "spockrock":
            return {playerWins: true, action: "vaporizes"};
        case "spockpaper":
            return {playerWins: false, action: "disproves"};
        case "spockscissors":
            return {playerWins: true, action: "smashes"};
        case "spocklizard":
            return {playerWins: false, action: "poisons"};
    }
}