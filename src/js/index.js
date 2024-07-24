import '../css/style.css';

import Quiz from './quiz';
import Questions from "./questions"


let startButton = document.querySelector('.start');

let questions = new Questions();

const quiz = new Quiz({
    questions: questions.Questions,
    score: questions.Questions.length

});

startButton.addEventListener('click', () => {

    quiz.startQuiz();
    questions.createQuestionCard();
    startButton.classList.add('disabled');
    showResults.classList.remove('disabled');

});


const showResults = document.querySelector('.showResults');

showResults.addEventListener('click', (e) => {
    let results = document.querySelectorAll('input[type=radio]:checked');
    quiz.getAnswers(results);
    showResults.classList.add('disabled');


});