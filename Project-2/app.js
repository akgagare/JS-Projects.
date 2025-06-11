let scissors = document.querySelector("#scissors");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let youScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg2 = document.querySelector("#msg");

function callComp() {
    return Math.floor(Math.random() * 3) + 1;
}


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


function play(userChoice) {
    const compChoice = callComp();

    
    if (userChoice === compChoice) {
        showMessage("It's a Draw!", "gray");
        console.log("draw");
    } else if (
        (userChoice === 1 && compChoice === 3) ||  
        (userChoice === 2 && compChoice === 1) ||  
        (userChoice === 3 && compChoice === 2)    
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


rock.addEventListener("click", () => play(1));
paper.addEventListener("click", () => play(2));
scissors.addEventListener("click", () => play(3));
