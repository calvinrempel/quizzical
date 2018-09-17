import { mapState } from "vuex";
import ResultsList from '../../components/ResultsList/ResultsList.vue';
import router from './../../router';
import navigation from "../../constants/navigation";

export default {
    name: "Quizzical-QuizResultsList",
    components: {
        ResultsList
    },
    computed: {
        results() {
            return this.quizResultsList ? this.quizResultsList : [];
        },
        ...mapState([
            'quizResultsList'
        ])
    },
    created: function() {
        this.$store.dispatch('loadResultsList');
    },
    methods: {
        goToResult(resultBrief) {
            this.$store.dispatch('loadResultDetails', {resultBrief: resultBrief})
                .then(success => {
                    router.push(navigation.landingSubroutes.quizResults);
                });
        },
        goToDashboard() {
            router.push(navigation.landing);
        }
    }
};