// Global Variables

const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BRONZE: '#5c3a0a',
    SILVER: '#727375',
    GOLD: '#B59410'
};

let streak = 0;


// Checks if DOM Content is loaded

document.addEventListener("DOMContentLoaded", function () {

    // console.log("DOM content loaded");

    let btns = document.getElementsByClassName("btn")
    for (const btn of btns) {
        btn.addEventListener("click", function () {
            displayGame(this.dataset.value);
            playGame(this.dataset.value);
            //console.log(this.dataset.value);
        });

    }

});

// Enables user to use up and down arrow keys to play game

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        let choice = event.key === "ArrowUp" ? "higher" : "lower";
        playGame(choice);
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

    let oldNumber = parseInt(document.getElementById("current").innerText); // ensures number is integer
    let newNumber = generateRandomNumber();

    // check is two numbers are the same before logic

    while (newNumber === oldNumber) {
        newNumber = generateRandomNumber();
    }

    checkAnswer()

    function checkAnswer() {

        let comparison; // The logic

        if (oldNumber < newNumber) {

            comparison = "higher";

        } else {

            comparison = "lower"
        }

        if (choice == comparison) { // correct answer

            correctAnswer()

        } else { // incorrect answer

            incorrectAnswer()

        }
    }
}

function correctAnswer() {

    streak++;

    changeBackgroundColor()

    document.getElementById("current-streak-score").innerHTML = streak;

    document.getElementById("answer-area").classList.add("correct"); // Changes answer-area color to green
    document.getElementById("answer-area").classList.remove("incorrect");
    document.getElementById("answer-area").innerHTML = 'Correct';


}

function incorrectAnswer() {

    if (streak > bestStreak) {
        document.getElementById("best-streak-score").innerHTML = streak;
    }

    streak = 0;
    document.getElementById("current-streak-score").innerHTML = streak;


    document.getElementById("answer-area").classList.add("incorrect"); // Changes answer-area color to red
    document.getElementById("answer-area").classList.remove("correct");
    document.getElementById("answer-area").innerHTML = 'Incorrect';

}

function changeBackgroundColor() {
    // code to change background colour depending on streak 
    // 3 - Bronze
    // 5 - Silver
    // 10 - Gold  

    switch (streak) {
        case 3:
            document.body.style.backgroundColor = '#5c3a0a';
            break;
        case 5:
            document.body.style.backgroundColor = '#727375';
            break;
        case 10:
            document.body.style.backgroundColor = '#B59410';
            break;
        default:
            break;
    }
}


// Creates and loads random number between 1-12

function generateRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 12) + 1;
    document.getElementById("current").innerHTML = randomNumber;

    return randomNumber



}





