// Checks if DOM Content is loaded

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM content loaded");

    let btns = document.getElementsByClassName("btn")
    for (const btn of btns) {
        btn.addEventListener("click", function () {
            displayGame(this.dataset.value)
            playGame(this.dataset.value);
            //console.log(this.dataset.value);
        });

    }
});

// HigherOrLowerGame object encapsulating the game logic (Source:)

const HigherOrLowerGame = {
    currentNumber: 0,
    currentStreak: 0,
    highestStreak: 0,
    
}

// Hides instruction area on click and loads game interface

function displayGame() {

    let hideInstructions = document.getElementById("instruction-area");
    let showGameArea = document.getElementById("game-area");

    // Hide the element by setting its style display property to "none"

    hideInstructions.style.display = "none";
    showGameArea.style.visibility = "visible";
}

function playGame(choice) {
    console.log(choice);

    let comparison

}

// Creates and loads random number between 1-12

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;

    let lastNumber = document.getElementById("current");

    // Ensures the same number as before is not selected

    if (randomNumber === lastNumber) {
        randomNumber = Math.floor(Math.random() * 12) + 1;

    } else {

        console.log(randomNumber);
        document.getElementById("current");
        document.getElementById("current").innerHTML = randomNumber;

    }
}

generateRandomNumber()

