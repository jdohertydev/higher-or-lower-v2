
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

