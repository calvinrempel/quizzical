import { mapState } from "vuex";
import AnswersList from '../../components/AnswersList/AnswersList.vue'
import AnswersStats from '../../components/AnswersStats/AnswersStats.vue'
import router from "../../router";
import navigation from "../../constants/navigation";

export default {
    name: "Quizzical-QuizResults",
    components: {
        AnswersList,
        AnswersStats
    },
    computed: {
        ...mapState([
            'activeQuizResult'
        ])
    },
    methods: {
        goToAllResults() {
            router.push(navigation.landingSubroutes.resultList);
        },
        goToDashboard() {
            router.push(navigation.landing);
        }
    }
};