// Global Variables

const COLORS = {
    RED: 'red',
    GREEN: 'green',
    BRONZE: '#5c3a0a',
    SILVER: '#727375',
    GOLD: '#B59410'
};

let streak = 0;

const playNowBtn = document.getElementById("play-now");
const instructionArea = document.getElementById("instruction-area");
const gameArea = document.getElementById("game-area");



// Checks if DOM Content is loaded

document.addEventListener("DOMContentLoaded", function () {
    // console.log("DOM content loaded");
    initEventListeners();   
});

function initEventListeners() {
    playNowBtn.addEventListener("click", startGame);
    let actionBtns = document.getElementsByClassName("action-btn")
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

function onActionBtnClick() {
    playTurn(this.dataset.value);
};


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
            incorrectAnswer()  
        }
    }
}

function correctAnswer() {
    updateStreakScore(1);
    changeBackgroundColor();
}


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





