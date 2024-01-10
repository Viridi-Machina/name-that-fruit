console.log('javascript loading...')

let nameSubmit = document.getElementById('welcome-form');

let resetButton = document.getElementById('reset-button');

// Variables for setting display of each screen of the game.
let startScreen = document.getElementById('welcome-screen');
let difficultyScreen = document.getElementById('section-difficulty-select');
let gameScreen = document.getElementById('quiz-screen');

let selectDifficulty = document.getElementsByClassName('fruit');

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

// For loop to iterate through <div> objects for targetting
for (var fruit of selectDifficulty){
    //console.log(fruit);
    var fruitHover = fruit.getElementsByTagName('h2');
    console.log(fruitHover[0]);
    fruitHover[0].addEventListener('mouseover', hoverSelect);
    fruitHover[0].addEventListener('mouseout', hoverSelectOff);
    fruitHover[0].addEventListener('click', runGame);
}

// The following two functions add a subtle hover transition effect.
function hoverSelect(){
    this.style.textShadow 
    = '0px 0px 8px hsla(33, 67%, 80%, 1)';
    this.style.transition = '0s';
}
function hoverSelectOff(){
    this.style.textShadow 
    = 'none';
    this.style.transition = '0.5s';
}

console.log(fruitHover[0].getElementsByTagName('h2'))


function runGame(){
    this.style.textDecoration = 'underline';
}

selectDifficulty[0].addEventListener('mouseover', hoverSelect);
nameSubmit.addEventListener('submit', difficultyScreenLoad);
resetButton.addEventListener('click', resetClicked);

console.log('javascript load complete');