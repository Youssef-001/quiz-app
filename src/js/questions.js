export default class Questions{

    constructor(){
        this.Questions = [
            {
                question: 'What is the capital of France?',
                answers: {
                    "a": 'Paris',
                    "b": 'Berlin',
                    "c": 'London',
                    "d": 'Madrid'
                },
                correctAnswer: 'a'
            },

            {
                question: 'What is the capital of Japan?',
                answers: {
                    "a": 'Kyoto',
                    "b": 'Osaka',
                    "c": 'Tokyo',
                    "d": 'Hiroshima'
                },
                correctAnswer: 'c'
            },

            {
                question: 'What is the capital of United states?',
                answers: {
                    "a": 'Chicago',
                    "b": 'Washington D.C',
                    "c": 'New York',
                    "d": 'Los Angeles'
                },
                correctAnswer: 'b'
            },

            {
                question: 'What is the capital of Italy?',
                answers: {
                    "a": 'Milan',
                    "b": 'Naples',
                    "c": 'Turin',
                    "d": 'Rome'
                },
                correctAnswer: 'd'
            },

            {
                question: 'What is the capital of Austria?',
                answers: {
                    "a": 'Linz',
                    "b": 'Vienna',
                    "c": 'Graz',
                    "d": 'Bregenz'
                },
                correctAnswer: 'b'
            }

            
        ];
    }

    

    createQuestionCard(){

        this.Questions.forEach((question,questionNumber) => {

            let questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            let questionParagraph = document.createElement('p');
            questionParagraph.textContent = question.question;
            questionParagraph.classList.add('question-paragraph');
            questionCard.appendChild(questionParagraph);
            let answersDiv = document.createElement('div');
            answersDiv.classList.add('answers');

            for (let answer in question.answers) {
                let answerLabel = document.createElement('label');
                answerLabel.htmlFor = `${questionNumber} ${answer}`;
                let answerInput = document.createElement('input');
                answerInput.type = 'radio';
                answerInput.name = 'question'+(questionNumber);
                answerInput.id = `${questionNumber} ${answer}`;;
                answerInput.value = answer;
                answerLabel.innerText = question.answers[answer];

                let answerr = document.createElement('div');
                answerr.appendChild(answerLabel);
                answerr.appendChild(answerInput);
                answersDiv.appendChild(answerr);
            }

            questionCard.appendChild(answersDiv);
            document.querySelector('.quiz').appendChild(questionCard);
        })

    }
}