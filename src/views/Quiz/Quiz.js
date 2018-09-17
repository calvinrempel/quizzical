import { mapState, mapGetters, mapMutations } from 'vuex';
import router from './../../router';
import navigation from '../../constants/navigation';

export default {
    name: "Quizzical-Quiz",
    data: () => ({
        answer: null,
        answerList: [],
        submitting: false
    }),
    computed: {
        ...mapGetters([
            'currentQuestion'
        ]),
        ...mapState([
            'activeQuiz',
            'currentQuestionIndex'
        ]),
        isLastQuestion() {
            return this.questionCount === (this.currentQuestionIndex + 1);
        },
        questionCount() {
            if (this.activeQuiz && this.activeQuiz.questions) {
                return this.activeQuiz.questions.length;
            }
            return 0;
        },
        question() {
            if (this.currentQuestion) {
                return this.currentQuestion;
            }
            return {  options: [] };
        }
    },
    methods: {
        advance() {
            // Store the answer
            const answerIdx = this.question.options
                .findIndex(option => option === this.answer);
            this.answerList.push(answerIdx);

            if (this.isLastQuestion) {
                this.submitting = true;
                
                this.$store.dispatch('submitQuiz', {
                    quiz: this.activeQuiz,
                    answers: this.answerList
                })
                .then(success => {
                    router.push(navigation.landingSubroutes.quizResults);
                });
            }
            else {
                this.answer = null;
                this.ADVANCE_QUESTION();
            }
        },
        ...mapMutations([
            'ADVANCE_QUESTION'
        ])
    }
};