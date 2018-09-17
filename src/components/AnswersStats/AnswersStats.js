import PieChart from '../PieChart/PieChart.vue';

export default {
    name: "Quizzical-AnswersStats",
    components: {
        PieChart
    },
    props: [
        'answers'
    ],
    computed: {
        safeAnswers() { 
            if (this.answers !== null && this.answers !== undefined) {
                return this.answers;
            }
            return [];
        },
        correctCount() {
            return this.safeAnswers.filter(answer => answer.correct).length;
        },
        incorrectCount() {
            return this.safeAnswers.filter(answer => !answer.correct).length;
        },
        percentage() {
            return Math.round((this.correctCount / this.safeAnswers.length) * 100);
        },
        chartData() {
            return {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [this.percentage, 100 - this.percentage],
                    backgroundColor: ["rgb(0, 255, 0)", "rgb(255, 0, 0)"]
                }]
            };
        }
    }
}