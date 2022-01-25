// DOM ELEMENTS 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
// event listeners for the start/next button to navigate through the quiz.
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// startgame function hides the start button on click and calls on the setNextQuestion Function 
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
// sets the 1st question and following questions
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  countDown()
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the proper way to close this <p> tag? ',
    answers: [
      { text: '</p>', correct: true },
      { text: 'p', correct: false },
      { text: '<p>', correct: false},
      { text: '<p/>', correct: false}
    ]
  },
  {
    question: 'what language provides the starting structure to every web page? ',
    answers: [
      { text: 'HTMl', correct: true },
      { text: 'CSS', correct: false },
      { text: 'Javascript', correct: false },
      { text: 'Spanish', correct: false }
    ]
  },
  {
    question: 'As a computer programer, how many times in a day do you copy and paste?',
    answers: [
      { text: 'never', correct: false },
      { text: 'sometimes', correct: false},
      { text: 'only once cause thats cheating', correct: false },
      { text: 'Allllll day long.', correct: true }
    ]
  },
  {
    question: 'Do i get an A on this homework assignemnt?',
    answers: [
      { text: 'yes', correct: true },
      { text: 'no', correct: false }
    ]
  }
]
// alet box is displaying at 2 seconds instead of 0?
function countDown(){
var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);
}