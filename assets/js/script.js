console.log('javascript loading...')

let nameSubmit = document.getElementById('welcome-form');

let resetButton = document.getElementById('reset-button');

let startScreen = document.getElementById('welcome-screen');
let difficultyScreen = document.getElementById('section-difficulty-select');
let gameScreen = document.getElementById('quiz-screen');

let 

/**
 * This function returns the user to the difficulty screen when clicking the reset button.
 * This is also called after entering a username.
 */
function resetClicked(){
    console.log('loading difficulty screen...');
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'block';
    gameScreen.style.display = 'none';

}
/**
 * This function calls the difficulty screen after choosing a username, which
 * is then stored in local storage.
 */
function difficultyScreenLoad(event){
    event.preventDefault();
    var user = document.getElementById('entered-name').value;
    console.log(user);
    window.localStorage.setItem('userName', user)
    alert(`Welcome to the game ${user}`)
    resetClicked();
}



nameSubmit.addEventListener('submit', difficultyScreenLoad)
resetButton.addEventListener('click', resetClicked);

console.log('javascript load complete')