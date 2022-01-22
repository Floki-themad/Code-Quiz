const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionButton = document.getElementById('question-container')
startButton.addEventListener('click', startGame)

function startGame(){
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionButton.classList.remove('hide');
}

function setNextQuestion(){

}

function selectAnswer(){

    
}