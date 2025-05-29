const quizQuestions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

export function* questionGenerator(){
    for(const question of quizQuestions){
        yield question;
    }
}

export const questions = quizQuestions;