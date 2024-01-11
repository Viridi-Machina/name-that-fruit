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
    console.log('loading complete.');
}

/**
 * This function calls the difficulty screen after choosing a username, which
 * is then stored in local storage.
 */
function difficultyScreenLoad(event){
    event.preventDefault();
    var user = document.getElementById('entered-name').value;
    console.log(`User chose to be called ${user}`);
    window.localStorage.setItem('userName', user)
    alert(`Welcome to the game ${user}`)
    resetClicked();
}

/**
 * When called this function displays the game screen.
 */
function gameScreenDisplay(){
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'none';
    gameScreen.style.display = 'block';
}

// For loop to iterate through <div> objects for targetting
for (var fruit of selectDifficulty){
    //console.log(fruit);
    var fruitHover = fruit.getElementsByTagName('h2');
    fruitHover[0].addEventListener('mouseover', hoverSelect);
    fruitHover[0].addEventListener('mouseout', hoverSelectOff);
    fruitHover[0].addEventListener('click', choiceSelect);
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

let easyH2 = selectDifficulty[0].getElementsByTagName('h2')[0];
let mediumH2 = selectDifficulty[1].getElementsByTagName('h2')[0];
let hardH2 = selectDifficulty[2].getElementsByTagName('h2')[0];
easyH2.addEventListener('click', choiceSelect);
mediumH2.addEventListener('click', choiceSelect);
hardH2.addEventListener('click', choiceSelect);

var quizArray = '';

function choiceSelect(questionNumber){
    let difficultySelect = this.textContent;
    console.log(`User Selected ${difficultySelect}`);
    if (difficultySelect === 'Easy'){
        quizArray = quizArrayEasy
    } else if (difficultySelect === 'Medium'){
        quizArray = quizArrayMedium
    } else if (difficultySelect === 'Hard'){
        quizArray = quizArrayHard
    }

    return loadGameQuestion(questionNumber);
}

//console.log(document.getElementById('question-number').textContent);
var questionNumber = 0;

function loadGameQuestion(questionNumber){
    console.log('loading game...');
    var questionNumber = 0;
    
    console.log(quizArrayEasy[0]);
    console.log(picture);
    
    console.log(quizArrayEasy[questionNumber].answers);



    console.log('loading complete.');


    
}
//console.log(quizArrayEasy[questionNumber].answers);
picture = quizArrayEasy[questionNumber].pictureCard[0];
console.log(picture);

selectDifficulty[0].addEventListener('mouseover', hoverSelect);
nameSubmit.addEventListener('submit', difficultyScreenLoad);
resetButton.addEventListener('click', resetClicked);

console.log('javascript load complete');