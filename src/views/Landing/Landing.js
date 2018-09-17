import router from "../../router";
import navigation from "../../constants/navigation";
import { mapState } from "vuex";

export default {
    name: "Quizzical-Landing",
    computed: {
        ...mapState([
            'username'
        ])
    },
    methods: {
        goToDashboard() {
            router.push(navigation.landing);
        },
        logout() {
            this.$store.dispatch('logout')
                .then(success => {
                    router.push(navigation.login);
                });
        }
    }
}