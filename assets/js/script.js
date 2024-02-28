// Global Variables

let streak = 0;
let bestStreak = 0;

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

// Hides instruction area on click and loads game interface

function displayGame() {

    let hideInstructions = document.getElementById("instruction-area");
    let showGameArea = document.getElementById("game-area");

    // Hide the element by setting its style display property to "none"

    hideInstructions.style.display = "none";
    showGameArea.style.visibility = "visible";
}





function playGame(choice) {


    // Create new number for comparison

    let oldNumber = document.getElementById("current").innerText;

    let newNumber = generateRandomNumber();

    let comparison; // The logic

    if (oldNumber < newNumber) {

        comparison = "higher";

    } else {

        comparison = "lower"
    }

    if (choice == comparison) { // correct answer

        streak++;
        document.getElementById("current-streak-score").innerHTML = streak;

        document.getElementById("answer-area").classList.add("correct"); // Changes answer-area color to green
        document.getElementById("answer-area").classList.remove("incorrect");

        document.getElementById("answer-area").innerHTML = 'Correct';


    } else { // incorrect answer

        if (streak > bestStreak) {
            document.getElementById("best-streak-score").innerHTML = streak;
        }

        streak = 0;
        document.getElementById("current-streak-score").innerHTML = streak;


        document.getElementById("answer-area").classList.add("incorrect"); // Changes answer-area color to red
        document.getElementById("answer-area").classList.remove("correct");
        document.getElementById("answer-area").innerHTML = 'Incorrect';






    }
}


// Creates and loads random number between 1-12

function generateRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 12) + 1;

    let lastNumber = document.getElementById("current");

    // Ensures the same number as before is not selected

    if (randomNumber === lastNumber) {
        randomNumber = Math.floor(Math.random() * 12) + 1;

    } else {

        // console.log(randomNumber);
        document.getElementById("current").innerHTML = randomNumber;

    }

    // Makes randomNumber available outside of the function

    return randomNumber



}


