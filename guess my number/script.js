"use strict";
let scretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === scretNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = scretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".number").style.width = "17rem";
  } else if (guess !== scretNumber) {
    if (score > 1) {
      displayMessage(guess > scretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  scretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "13rem";
});
