import { mapState } from "vuex";
import navigation from "../../constants/navigation";
import router from './../../router';

export default {
    name: "Quizzical-QuizBrief",
    computed: mapState({
        quiz: state => state.selectedQuizBrief
    }),
    methods: {
        returnToList() {
            router.push(navigation.landing);
        },
        goToQuiz() {
            this.$store.dispatch('loadQuiz', {quizBrief: this.quiz})
                .then(success => {
                    router.push(navigation.landingSubroutes.quiz);
                });
        }
    }
};