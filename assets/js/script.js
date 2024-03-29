// Global Variables
const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BRONZE: '#5c3a0a',
    SILVER: '#727375',
    GOLD: '#B59410',
    BLACK: '#171717',
};

let streak = 0;
let fadeEffect = null;

const playNowBtn = document.getElementById("play-now");
const instructionArea = document.getElementById("instruction-area");
const gameArea = document.getElementById("game-area");

// Checks if DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    initEventListeners();
});

function initEventListeners() {
    playNowBtn.addEventListener("click", startGame);
    let actionBtns = document.getElementsByClassName("action-btn");
    for (const eachActionBtn of actionBtns) {
        eachActionBtn.addEventListener("click", onActionBtnClick);
    }

    // Enables user to use up and down arrow keys to play game
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            let choice = event.key === "ArrowUp" ? "higher" : "lower";
            playTurn(choice);
        }
    });
}

// Hides instruction area on click and loads game interface
function startGame() {
    instructionArea.style.display = "none";
    gameArea.style.visibility = "visible";
}

// Starts turn
function onActionBtnClick() {
    playTurn(this.dataset.value);
}

function playTurn(choice) {
    // Create new number for comparison 
    const currentNumber = parseInt(document.getElementById("current").innerText); // ensures number is integer
    let newNumber = generateRandomNumber();

    // check is two numbers are the same before logic
    while (newNumber === currentNumber) {
        newNumber = generateRandomNumber();
    }

    // Update new number to HTML
    document.getElementById("current").innerHTML = newNumber;

    checkAnswer();

    function checkAnswer() {
        // New no > Old no; Choice = H/L
        // New no < Old no; Choice = H/L
        if ((currentNumber < newNumber && choice === "higher") || (currentNumber > newNumber && choice === "lower")) {
            // Correct
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    }
}

function correctAnswer() {
    updateStreakScore(1);
    changeBackgroundColor();
}

function incorrectAnswer() {
    // Update best streak value
    let bestStreakNode = document.getElementById("best-streak-score");
    if (streak > parseInt(bestStreakNode.innerHTML)) {
        bestStreakNode.innerHTML = streak;
    }
    updateStreakScore(-streak);

    // As turn has ended, change background back to black
    document.body.style.backgroundColor = COLORS.BLACK;
}

function updateStreakScore(updateValue) {
    streak = streak + updateValue;
    document.getElementById("current-streak-score").innerHTML = streak;
    // Correct answer case
    const answerArea = document.getElementById("answer-area");
    if (updateValue > 0) {
        answerArea.innerHTML = 'Correct';
        answerArea.style.color = COLORS.GREEN;
    } else {
        answerArea.innerHTML = 'Incorrect';
        answerArea.style.color = COLORS.RED;
    }
    // Fade answerArea text out
    fadeOut(answerArea);
}

function fadeOut(element) {

    // Prevents text blinking if user is clicking quickly
    if (fadeEffect) {
        clearInterval(fadeEffect);
    }

    // Set initial opacity
    element.style.opacity = 1;

    // Fade out - https://stackoverflow.com/questions/67625352/how-do-i-create-a-callback-function-for-when-the-fading-function-is-done
    let opacity = 1;
    fadeEffect = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
}

function changeBackgroundColor() {
    // code to change background colour depending on streak 
    // 3 - Bronze
    // 5 - Silver
    // 10 - Gold  

    switch (streak) {
        case 3:
            document.body.style.backgroundColor = COLORS.BRONZE;
            break;
        case 5:
            document.body.style.backgroundColor = COLORS.SILVER;
            break;
        case 10:
            document.body.style.backgroundColor = COLORS.GOLD;
            break;
        default:
            break;
    }
}

// Creates and loads random number between 1-12
function generateRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
}