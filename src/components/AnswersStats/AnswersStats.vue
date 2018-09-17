<template>
    <div class="answer-stats">
        <div class="numeric">
            <div class="percent" v-bind:class="{ pass: percentage >= 50, fail: percentage < 50 }">
                {{percentage}}%
            </div>
            <div><label>Correct:</label> {{correctCount}}</div>
            <div><label>Incorrect:</label> {{incorrectCount}}</div>
        </div>

        <PieChart v-bind:chartData="chartData"></PieChart>
    </div>
</template>
<script src="./AnswersStats.js"></script>
<style scoped src="./AnswersStats.css"></style>