let resetButton = document.getElementById('reset-button');
let startScreen = document.getElementById('welcome-screen');
let difficultyScreen = document.getElementById('section-difficulty-select');
let gameScreen = document.getElementById('quiz-screen');

function resetClicked(){
    console.log('resetting..');
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'block';
    gameScreen.style.display = 'none';

}

resetButton.addEventListener('click', resetClicked);