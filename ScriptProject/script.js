"use strict";

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").innerText = "NOT A Number ❌";
  } else if (guess === number) {
    document.querySelector(".message").innerText = "Correct Answer 💀";
    document.querySelector("body").style.backgroundColor="green"
    document.querySelector(".highscore").textContent=score;
    document.querySelector(".number").innerText = number;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").innerText = "Too High...📤";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
        document.querySelector(".message").innerText = "You Lost The Game...Boom 👾";
    }
  } else if (guess < number) {
    if (score > 1) {
        document.querySelector(".message").innerText = "Too Low...📥";
        score--;
        document.querySelector(".score").textContent = score;
      }else{
          document.querySelector(".message").innerText = "You Lost The Game...Boom 👾";
      }
  }
});
