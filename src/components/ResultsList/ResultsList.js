export default {
    name: "Quizzical-ResultsList",
    props: [
        'results',
    ],
    computed: {
        safeResults() {
            return this.results ? this.results : [];
        },
        percentages() {
            return this.safeResults.map(res => {
                return Math.round(
                    ( (res.correctAnswers / (res.correctAnswers + res.incorrectAnswers)) * 100)
                ) ;
            });
        }
    },
    methods: {
        selectResult(result) {
            this.$emit('result-selected', result);
        }
    }
}