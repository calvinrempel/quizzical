export default {
    name: "Quizzical-QuizList",
    props: [
        'quizzes'
    ],
    methods: {
        selectQuiz(quiz) {
            this.$emit('quiz-selected', quiz);
        }
    }
}