export default class Quiz{

    constructor(config){
        self.questions = config.questions;
        self.score = config.score;
    }

    startQuiz(){
        console.log('Quiz started');
    }



    getAnswers(e){

        if (e.length == questions.length) {
            console.log(questions);

            questions.forEach((question,questionNumber) => {
                if (e[questionNumber].value != question.correctAnswer)
                    {e[questionNumber].parentElement.style="background-color: #f87171";
                        score--;
                    }
            })

            questions.forEach((question,questionNumber) => {
                let element = document.getElementById(questionNumber + " " + question.correctAnswer);
                element.parentElement.style="background-color: #86efac";
                    
            })

            
            document.querySelector('.score').innerHTML = `Your score: ${score}/${questions.length}`
        }

    }




}