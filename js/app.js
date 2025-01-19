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
let computerNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let attempts = 0;
let maxAttempts = 3;
let history = [];

// Function to check the player's guess
function checkGuess() {
    const playerGuess = parseInt(guessInput.value); // Get the input value

    // Input validation
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
        guessMessage.textContent = "Please enter a valid number between 1 and 10.";
        return;
    }

    // Update game state
    attempts++;
    history.push(playerGuess);
    currentGuess.textContent = playerGuess; //  current guess
    guessHistory.textContent = history.join(", "); //  guess history

    // Check if the guess is correct, too high, or too low
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

    // Clear the input f
    guessInput.value = "";
}

//  end of game
function endGame() {
    submitBtn.disabled = true; // Disable the submit button
    restartBtn.disabled = false; // Enable the restart button
    guessInput.disabled = true; // Disable input field
}

// Function to restart the game
function restartGame() {
    // Reset variables
    computerNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    history = [];

    // Reset 
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "";
    guessHistory.textContent = "";
    guessInput.value = "";

   //reset buttons
    submitBtn.disabled = false;
    restartBtn.disabled = true;
    guessInput.disabled = false;
}

// 
submitBtn.addEventListener("click", checkGuess); // Check guess on submit
restartBtn.addEventListener("click", restartGame); // Restart game on restart