import QuizList from '../../components/QuizList/QuizList.vue';
import ResultsList from '../../components/ResultsList/ResultsList.vue';
import { mapState, mapMutations } from 'vuex';
import router from './../../router';
import navigation from '../../constants/navigation';

export default {
    name: "Quizzical-Dashboard",
    components: {
        QuizList,
        ResultsList
    },
    computed: mapState({
        quizzes: state => state.quizList,
        recentResults: state => state.recentQuizResultsSummary
    }),
    created: function() {
        this.$store.dispatch('loadQuizList');
        this.$store.dispatch('loadRecentResults');
    },
    methods: {
        goToQuizBrief(quiz) {
            this.SET_SELECTED_QUIZ_BRIEF(quiz);
            router.push(navigation.landingSubroutes.quizBrief);
        },
        goToResult(resultBrief) {
            this.$store.dispatch('loadResultDetails', {resultBrief: resultBrief})
                .then(success => {
                    router.push(navigation.landingSubroutes.quizResults);
                });
        },
        viewAllResults() {
            router.push(navigation.landingSubroutes.resultList);
        },
        ...mapMutations([
            'SET_SELECTED_QUIZ_BRIEF'
        ])
    }
};