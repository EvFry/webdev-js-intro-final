"use strict";
"use strict";

// DOM Elements
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

// Game Variables
let computerNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 100
let attempts = 0;
let maxAttempts = 3;
let history = [];

// Function to check the guess
function checkGuess() {
    const playerGuess = parseInt(guessInput.value);

    // Input validation
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        guessMessage.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Update game state
    attempts++;
    history.push(playerGuess);
    currentGuess.textContent = playerGuess;
    guessHistory.textContent = history.join(", ");

    // Check win/lose conditions
    if (playerGuess === computerNumber) {
        guessMessage.textContent = "Congratulations! You guessed the correct number!";
        computerGuess.textContent = computerNumber;
        endGame();
    } else if (attempts === maxAttempts) {
        guessMessage.textContent = "Game Over! You've used all your attempts.";
        computerGuess.textContent = computerNumber;
        endGame();
    } else if (playerGuess < computerNumber) {
        guessMessage.textContent = "Too low! Try again.";
    } else {
        guessMessage.textContent = "Too high! Try again.";
    }

    // Clear input field
    guessInput.value = "";
}

// Function to end the game
function endGame() {
    submitBtn.disabled = true;
    restartBtn.disabled = false;
    guessInput.disabled = true;
}

// Function to restart the game
function restartGame() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    history = [];
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "";
    guessHistory.textContent = "";
    guessInput.value = "";
    submitBtn.disabled = false;
    restartBtn.disabled = true;
    guessInput.disabled = false;
}

// Event Listeners
submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);
