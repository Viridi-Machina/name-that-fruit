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
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    questionHeader.innerHTML = `<h2>Question: 1/10<h2>`;
    resetScore(currentCorrect, currentWrong);
    document.getElementById('correct-answers').textContent = 0;
    document.getElementById('wrong-answers').textContent = 0;
    document.getElementById('question-number').style.position = 'static';
    imageDisplay.style.opacity = '1';
}

/**
 * This function calls the difficulty screen after choosing a username, which
 * is then stored in local storage.
 */
function difficultyScreenLoad(event){
    event.preventDefault();
    var user = document.getElementById('entered-name').value;
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

/**
 * This function creates a variable linked to the questions.js 
 * script file for referrence in later functions. It effectively 
 * stores the user's choice of difficulty before launching
 * the first question.
 */
function choiceSelect(){
    let difficultySelect = this.textContent;
    if (difficultySelect === 'Easy'){
        quizArray = quizArrayEasy;
    } else if (difficultySelect === 'Medium'){
        quizArray = quizArrayMedium;
    } else if (difficultySelect === 'Hard'){
        quizArray = quizArrayHard;
    }

    loadFirstQuestion(questionNumber);
}

let totalCorrect = Number(document.getElementById('correct-answers').textContent);
let totalWrong = Number(document.getElementById('wrong-answers').textContent);

let questionHeader = document.getElementById('question-number');

let questionNumber = 0;

/**
 * Increments the question-number variable by 1 each time it is called.
*/
function nextLevel(){
    questionNumber = questionNumber + 1;
}


let picture = '';
let answer1 = document.getElementsByClassName('answer-box')[0];
let answer2 = document.getElementsByClassName('answer-box')[1];
let answer3 = document.getElementsByClassName('answer-box')[2];
let answer4 = document.getElementsByClassName('answer-box')[3];
let imageDisplay = document.getElementById('picture-card');

/**
 * Loads the first question of the game based on the user's 
 * choice of difficulty.
 */
function loadFirstQuestion(){
    setTimeout(gameScreenDisplay, 400);

    questionNumber = 0;

    let imageDisplay = document.getElementById('picture-card');

    picture = quizArray[questionNumber].pictureCard[0];
    imageDisplay.style.background = `url(${picture}) center center / cover`;

    answer1.textContent = quizArray[questionNumber].answers[0];
    answer2.textContent = quizArray[questionNumber].answers[1];
    answer3.textContent = quizArray[questionNumber].answers[2];
    answer4.textContent = quizArray[questionNumber].answers[3];
}

    answer1.addEventListener('click', runGame);
    answer2.addEventListener('click', runGame);
    answer3.addEventListener('click', runGame);
    answer4.addEventListener('click', runGame);

/**
 * The main game function - this iterates through each of the questions
 * in the chosen array to advance after each answer is selected.
 * I was unable to figure out how to add the total score at the end
 * without continuing through the rest of the function.
 * 
 * The event listeners at the end of the function effectively loop the
 * function after every answer that is clicked, before running the endScreen()
 * function that displays a final score message.
 */
function runGame(){
    if (questionNumber < 9){

        let givenAnswer = this.textContent;
        let i = quizArray[questionNumber].answers[4] - 1;
        let correctAnswer = quizArray[questionNumber].answers[i];

        if (questionNumber < 9){
            questionHeader.innerHTML = `<h2>Question: ${questionNumber + 2}/10<h2>`
        } else {
            questionHeader.innerHTML = `<h2>Question: 10/10<h2>`
        }
        if (givenAnswer === correctAnswer){
            increaseScore(currentCorrect);
            document.getElementById('correct-answers').innerHTML = currentCorrect;
        } else {
            increaseWrong(currentWrong);
            document.getElementById('wrong-answers').innerHTML = currentWrong;
        }

        nextLevel(questionNumber);
        picture = quizArray[questionNumber].pictureCard[0];
        imageDisplay.style.background = `url(${picture}) center center / cover`;
        
        answer1.textContent = quizArray[questionNumber].answers[0];
        answer2.textContent = quizArray[questionNumber].answers[1];
        answer3.textContent = quizArray[questionNumber].answers[2];
        answer4.textContent = quizArray[questionNumber].answers[3];

    
        answer1.addEventListener('click', runGame);
        answer2.addEventListener('click', runGame);
        answer3.addEventListener('click', runGame);
        answer4.addEventListener('click', runGame);
        
    } else if (questionNumber == 9) {
          return setTimeout(endScreen(), 1000);
    } 
}

/**
 * This function displays a final message with total score that breaks
 * out of the runGame() function.
 */
function endScreen(){
    imageDisplay.style.opacity = '0.1';
    questionHeader.innerHTML = `<h2>Well done! <br>You scored ${currentCorrect}/10<h2>`;
    document.getElementById('question-number').style.position = 'fixed';
}

let currentCorrect = Number(document.getElementById('correct-answers').textContent)
function increaseScore(){
    ++currentCorrect; 
}

let currentWrong = Number(document.getElementById('wrong-answers').textContent)
function increaseWrong(){
    ++currentWrong;
}

/**
 * This function resets scores back to 0 upon clicking the reset button.
 */
function resetScore(){
    currentCorrect = 0;
    currentWrong = 0;
}

selectDifficulty[0].addEventListener('mouseover', hoverSelect);
nameSubmit.addEventListener('submit', difficultyScreenLoad);
resetButton.addEventListener('click', resetClicked);