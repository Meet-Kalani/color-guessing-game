// DOM elements
const options = document.querySelector(".options");
const message = document.querySelector(".message");
const colorBox = document.querySelector(".color-box");
const blackBtn = document.querySelector(".black-btn");
const brownBtn = document.querySelector(".brown-btn");
const resetBtn = document.querySelector(".reset-btn");
const scoreValue = document.querySelector(".score-value");
const difficultyLevel = document.querySelector(".difficulty-level");

let colors = ["Red", "Green", "Blue"];
let score = 0;
let difficulty = "easy";

resetBtn.addEventListener("click", resetGame);
difficultyLevel.addEventListener("change", setDifficulty);

// function handles user guesses in the game, updates the score and feedback message accordingly, and changes the color of the color box to a randomly generated color.
options.addEventListener("click", (event) => {
  const btn = event.target;
  const color = generateRandomColor();
  const guess = btn.innerText;

  if (color === guess) {
    score += getScoreIncrement();
    message.innerText = "Correct!";
  } else {
    message.innerText = "Wrong!";
  }
  scoreValue.innerText = score;

  setColorBoxColor(color);
});

function setDifficulty() {
  difficulty = difficultyLevel.value;

  if (difficulty === "medium") {
    removeFromColors("Brown");
    addToColorsIfNotExists("Black");
    btnVisibilityToggler(brownBtn, "none");
    btnVisibilityToggler(blackBtn, "initial");
  } else if (difficulty === "hard") {
    removeFromColors("Black");
    addToColorsIfNotExists("Black", "Brown");
    btnVisibilityToggler(brownBtn, "initial");
    btnVisibilityToggler(blackBtn, "initial");
  } else {
    removeFromColors("Brown", "Black");
    btnVisibilityToggler(brownBtn, "none");
    btnVisibilityToggler(blackBtn, "none");
  }
  resetGame();
}

function removeFromColors(...colorValues) {
  colorValues.forEach((colorValue) => {
    let index = colors.indexOf(colorValue);
    if (index !== -1) {
      colors.splice(index, 1);
    }
  });
}

function addToColorsIfNotExists(...colorValues) {
  colorValues.forEach((colorValue) => {
    if (!colors.includes(colorValue)) {
      colors.push(colorValue);
    }
  });
}

function btnVisibilityToggler(element, propertyValue) {
  if (propertyValue === "none") {
    element.classList.add("d-none");
  } else {
    element.classList.remove("d-none");
  }
}

function resetGame() {
  scoreValue.innerText = score = 0;
  message.innerText = "Welcome!";
  setColorBoxColor("white");
}

function generateRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getScoreIncrement() {
  switch (difficulty) {
    case "easy":
      return 1;
    case "medium":
      return 2;
    case "hard":
      return 3;
    default:
      return 1;
  }
}

function setColorBoxColor(color) {
  colorBox.style.backgroundColor = color.toLowerCase();
}
