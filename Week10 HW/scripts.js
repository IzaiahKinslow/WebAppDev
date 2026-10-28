// check that the file is linked
console.log("DOM HW loaded");

// select the elements I need
let titleEl = document.getElementById("game-title");
let mainEl = document.getElementById("game-main");
let imgEl = document.getElementById("game-img");
let listEl = document.getElementById("game-list");
let highlightBtn = document.getElementById("highlight-btn");
let swapBtn = document.getElementById("swap-btn");
let challengeEl = document.getElementById("challenge-text");
let introEl = document.querySelector(".intro-text");
let allParagraphs = document.querySelectorAll("p");

// show how many paragraphs there are
console.log("Paragraphs on the page: " + allParagraphs.length);

// change the title text
titleEl.textContent = "Video Games — Powered by JavaScript";

// change the intro text
introEl.textContent = "These are some of my favorite video games.";

// my list of games
let games = ["Marvel Rivals", "Call of Duty", "Borderlands", "Cloudheim"];

// image file for each game (same order as the games above)
let pictures = ["marvel.jpg", "cod.jpg", "borderlands.jpg", "cloudheim.jpg"];

// start the main image on the first game
let current = 0;
imgEl.src = pictures[current];
imgEl.alt = games[current];

// make a list item for each game and add it to the list
for (let i = 0; i < games.length; i++) {
  let li = document.createElement("li");
  li.textContent = games[i];
  listEl.appendChild(li);
}

// turn the highlight on and off when the button is clicked
highlightBtn.addEventListener("click", function () {
  mainEl.classList.toggle("highlight-box");
});

// go to the next game image when the swap button is clicked
swapBtn.addEventListener("click", function () {
  current = current + 1;

  // if we went past the last game, go back to the first one
  if (current === pictures.length) {
    current = 0;
  }

  imgEl.src = pictures[current];
  imgEl.alt = games[current];
});

// challenge: change the text and color of the paragraph
challengeEl.textContent = "Uhhh I dont know what to put here";
challengeEl.style.color = "blue";
