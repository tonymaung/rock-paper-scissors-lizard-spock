const choices = {
    rock: { name: "Rock", defeats: ["scissors", "lizard"] },
    paper: { name: "Paper", defeats: ["rock", "spock"] },
    scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
    lizard: { name: "Lizard", defeats: ["paper", "spock"] },
    spock: { name: "Spock", defeats: ["scissors", "rock"] },
}
let computerChoice = ""
const playerScoreEl = document.getElementById("playerScore")
const playerChoiceEl = document.getElementById("playerChoice")
const computerScoreEl = document.getElementById("computerScore")
const computerChoiceEl = document.getElementById("computerChoice")
const resultText = document.getElementById("result-text")
const playerRock = document.getElementById("player-rock")
const playerPaper = document.getElementById("player-paper")
const playerScissors = document.getElementById("player-scissors")
const playerLizard = document.getElementById("player-lizard")
const playerSpock = document.getElementById("player-spock")
const computerRock = document.getElementById("computer-rock")
const computerPaper = document.getElementById("computer-paper")
const computerScissors = document.getElementById("computer-scissors")
const computerLizard = document.getElementById("computer-lizard")
const computerSpock = document.getElementById("computer-spock")
let playerScore = 0
let computerScore = 0
const allGameIcons = document.querySelectorAll(".far")
    // Update Score
function updateScore(playerChoice) {
    if (playerChoice == computerChoice) {
        resultText.textContent = "It's a tie"
        resultText.style.color = "black"
    } else {
        const choice = choices[playerChoice]
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.textContent = "Player Wins"
            playerScore++
            playerScoreEl.textContent = playerScore
            resultText.style.color = "dodgerblue"
            confetti({
                particleCount: 300,
                startVelocity: 30,
                spread: 180,
            })
        } else {
            resultText.textContent = "Computer Wins"
            computerScore++
            computerScoreEl.textContent = computerScore
            resultText.style.color = "red"
        }
    }
}
// reset all selected icons
function resetSelected() {
    allGameIcons.forEach((icon, index) => {
        icon.classList.remove("selected")
    })
}
// reset All selected scores
function resetAll() {
    playerScore = 0
    computerScore = 0
    playerScoreEl.textContent = playerScore
    computerScoreEl.textContent = computerScore
    playerChoiceEl.textContent = ""
    computerChoiceEl.textContent = ""
    resultText.textContent = ""
    resetSelected()
}
// Computer Random Choice
function computerRandomChoice() {
    const computerChoiceNumber = Math.random()
    if (computerChoiceNumber <= 0.2) {
        computerChoice = "rock"
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = "paper"
    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = "scissors"
    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = "lizard"
    } else if (computerChoiceNumber <= 1) {
        computerChoice = "spock"
    }
}

// Display Computer Choices
function displayComputerChoices() {
    switch (computerChoice) {
        case "rock":
            computerChoiceEl.textContent = "--- Rock"
            computerRock.classList.add("selected")
            break
        case "paper":
            computerChoiceEl.textContent = "--- Paper"
            computerPaper.classList.add("selected")
            break
        case "scissors":
            computerChoiceEl.textContent = "--- Scissors"
            computerScissors.classList.add("selected")
            break
        case "lizard":
            computerChoiceEl.textContent = "--- Lizard"
            computerLizard.classList.add("selected")
            break
        case "spock":
            computerChoiceEl.textContent = "--- Spock"
            computerSpock.classList.add("selected")
            break
        default:
            break
    }
}
// Check Result
function checkResult(playerChoice) {
    resetSelected()
    computerRandomChoice()
    displayComputerChoices()
    updateScore(playerChoice)
}
// Player Selection

function select(playerChoice) {
    checkResult(playerChoice)
    switch (playerChoice) {
        case "rock":
            playerChoiceEl.textContent = "--- Rock"
            playerRock.classList.add("selected")
            break
        case "paper":
            playerChoiceEl.textContent = "--- Paper"
            playerPaper.classList.add("selected")
            break
        case "scissors":
            playerChoiceEl.textContent = "--- Scissors"
            playerScissors.classList.add("selected")
            break
        case "lizard":
            playerChoiceEl.textContent = "--- Lizard"
            playerLizard.classList.add("selected")
            break
        case "spock":
            playerChoiceEl.textContent = "--- Spock"
            playerSpock.classList.add("selected")
            break
        default:
            break
    }
}
resetAll()