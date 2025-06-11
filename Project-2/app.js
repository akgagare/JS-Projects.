let scissors = document.querySelector("#scissors");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let youScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg2 = document.querySelector("#msg");

// 1: Rock, 2: Paper, 3: Scissors
function callComp() {
    return Math.floor(Math.random() * 3) + 1;
}

// Helper to display result message with styles
function showMessage(text, color) {
    msg2.innerHTML = text;
    msg2.style.color = color;
    msg2.style.fontSize = "24px";
    msg2.style.fontWeight = "bold";
    msg2.style.backgroundColor = "#f1f1f1";
    msg2.style.padding = "10px";
    msg2.style.borderRadius = "8px";
    msg2.style.textAlign = "center";
}

// Game logic
function play(userChoice) {
    const compChoice = callComp();

    // 1: Rock, 2: Paper, 3: Scissors
    if (userChoice === compChoice) {
        showMessage("It's a Draw!", "gray");
        console.log("draw");
    } else if (
        (userChoice === 1 && compChoice === 3) ||  // Rock beats Scissors
        (userChoice === 2 && compChoice === 1) ||  // Paper beats Rock
        (userChoice === 3 && compChoice === 2)     // Scissors beats Paper
    ) {
        youScore.innerHTML = Number(youScore.innerHTML) + 1;
        showMessage("You have Won!", "green");
        console.log("you won");
    } else {
        compScore.innerHTML = Number(compScore.innerHTML) + 1;
        showMessage("Computer Won!", "red");
        console.log("comp won");
    }
}

// Event listeners
rock.addEventListener("click", () => play(1));
paper.addEventListener("click", () => play(2));
scissors.addEventListener("click", () => play(3));
