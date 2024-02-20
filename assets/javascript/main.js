const options = document.querySelector('.options');
const message = document.querySelector('.message');
const colorBox = document.querySelector('.color-box');
const blackBtn = document.querySelector('.black-btn');
const brownBtn = document.querySelector('.brown-btn');
const resetBtn = document.querySelector('.reset-btn');
const scoreValue = document.querySelector('.score-value');
const difficultyLevelSelector = document.querySelector('.difficulty-level');
let colors = ['Red', 'Green', 'Blue'];
let score = 0;
let difficulty = 'easy';

resetBtn.addEventListener('click', resetGame);
difficultyLevelSelector.addEventListener('click',setDifficulty);

// function handles user guesses in the game, updates the score and feedback message accordingly, and changes the color of the color box to a randomly generated color.
options.addEventListener('click', (event) => {
    const { target: btn } = event;
    let color = generateRandomColor();
    let guess = btn.textContent;
    if (color === guess) {
        score += getScoreIncrement();
        message.textContent = 'Correct!';
    } else {
        message.textContent = 'Wrong!';
    }
    scoreValue.textContent = score;

    setColorBoxColor(color);
})

function setDifficulty() {
    difficulty = difficultyLevelSelector.value;

    if (difficulty === 'medium') {
        colors.push('Black')
        blackBtn.style.display = "initial";
        brownBtn.style.display = "none";
    } else if (difficulty === 'hard') {
        colors.push('Black', 'Brown')
        brownBtn.style.display = blackBtn.style.display = "initial";
    } else {
        brownBtn.style.display = blackBtn.style.display = "none";
    }

    resetGame();
}

function resetGame() {
    scoreValue.textContent = score = 0;
    message.textContent = 'Welcome!';
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
    colorBox.style.backgroundColor = color.toLowerCase();
}