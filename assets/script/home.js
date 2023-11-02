"use strict";

let answer = Math.ceil(Math.random() * 20);
const guessInput = document.querySelector(".guess");
const check = document.querySelector("#check");
const again = document.querySelector("#again");
const message = document.querySelector(".status");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const highscoreElement = document.querySelector(".highscore");
let score = Number(document.querySelector(".score").textContent);
let highscore = 0;
let win = false;

check.addEventListener("submit", function (e) {
    e.preventDefault();

    const guess = Number(guessInput.value);

    // If player out of score
    if (score < 1) {
        message.textContent = "💥 You Lose";
        body.style.backgroundColor = "red";
    }
    // If player does not enters a number
    else if (!guess) {
        message.textContent = "⛔️ No Number";
    }
    // If guess is less than 1 and greater than 20
    else if (guess < 1 || guess > 20) {
        message.textContent = "🚫 Out of Range";
    }
    // If player wins
    else if (guess === answer) {
        win = true;
        message.textContent = "🏆️ You Win";
        body.style.backgroundColor = "#60b347";
        number.textContent = answer;
        if (highscore < score) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }
    }
    // If player guess wrong
    else if (!win) {
        score--;
        document.querySelector(".score").textContent = score;
        if (guess < answer) {
            message.textContent = "📉 too small";
        } else if (guess > answer) {
            message.textContent = "📈 too large";
        }
    }
});

again.addEventListener("click", function () {
    win = false;
    answer = Math.ceil(Math.random() * 20);
    score = 20;

    body.style.backgroundColor = "";
    message.textContent = "Start guessing...";
    number.textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});
