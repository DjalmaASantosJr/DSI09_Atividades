import { questionGenerator } from './quizModule.js';

const quiz = questionGenerator();

function displayQuestions(){
    console.log("Iniciando o quiz...\n");
    
    let currentQuestion = quiz.next();
    
    while(!currentQuestion.done){
        const question = currentQuestion.value;
        console.log(question.question);
        question.options.forEach((option, index) => {
            console.log('${index + 1}. ${option}');
        });
        console.log('Resposta correta: ${question.answer}\n');
        currentQuestion = quiz.next();
    }
    
    console.log("Quiz concluído!");
}

displayQuestions();