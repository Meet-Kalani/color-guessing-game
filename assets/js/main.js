// DOM elements
const optionsElement = document.querySelector('.options');
const messageElement = document.querySelector('.message');
const colorBoxElement = document.querySelector('.color-box');
const blackBtnElement = document.querySelector('.black-btn');
const brownBtnElement = document.querySelector('.brown-btn');
const resetBtnElement = document.querySelector('.reset-btn');
const scoreValueElement = document.querySelector('.score-value');
const difficultyLevelElement = document.querySelector('.difficulty-level');

let colors = ['Red', 'Green', 'Blue'];
let score = 0;
let difficulty = 'easy';

resetBtnElement.addEventListener('click', resetGame);
difficultyLevelElement.addEventListener('change',setDifficulty);

// function handles user guesses in the game, updates the score and feedback message accordingly, and changes the color of the color box to a randomly generated color.
optionsElement.addEventListener('click', (event) => {
    const btn = event.target;
    let color = generateRandomColor();
    let guess = btn.textContent;
    if (color === guess) {
        score += getScoreIncrement();
        messageElement.textContent = 'Correct!';
    } else {
        messageElement.textContent = 'Wrong!';
    }
    scoreValueElement.textContent = score;

    setColorBoxColor(color);
})

function setDifficulty() {
    difficulty = difficultyLevelElement.value;

    if (difficulty === 'medium') {
        colors.push('Black')
        blackBtnElement.style.display = "initial";
        brownBtnElement.style.display = "none";
    } else if (difficulty === 'hard') {
        colors.push('Black', 'Brown')
        brownBtnElement.style.display = blackBtnElement.style.display = "initial";
    } else {
        brownBtnElement.style.display = blackBtnElement.style.display = "none";
    }

    resetGame();
}

function resetGame() {
    scoreValueElement.textContent = score = 0;
    messageElement.textContent = 'Welcome!';
    setColorBoxColor('white');
}

function generateRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getScoreIncrement() {
    switch (difficulty) {
        case 'easy':
            return 1;
        case 'medium':
            return 2;
        case 'hard':
            return 3;
        default:
            return 1;
    }
}

function setColorBoxColor(color) {
    colorBoxElement.style.backgroundColor = color.toLowerCase();
}