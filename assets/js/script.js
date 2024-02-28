// Variables

//const currentElem = document.getElementById("current");
//const btns = document.getElementsByClassName("btn");
//const resultElem = document.getElementById("result");
const scoreElem = document.getElementById("score");

//let lastNumber = 0;
//let score = 0;



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
    console.log(choice);

    // Create new number for comparison

    let oldNumber = document.getElementById("current").innerText;
    let newNumber = generateRandomNumber();



    console.log(newNumber)
    console.log(oldNumber)



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
        document.getElementById("current");
        document.getElementById("current").innerHTML = randomNumber;

    }

    // makes randomNumber available outside of the function
    
    return randomNumber
}



