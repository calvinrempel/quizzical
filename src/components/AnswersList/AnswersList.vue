<template>
    <div class="answer-list">
        <md-list>
            <md-list-item v-for="(answer, index) in answers">
                <div class="questionNumber">
                    {{index + 1}}.
                </div>
                <div class="md-list-item-text">
                    <div><label>Your Answer:</label> {{answer.chosen}}</div>
                    <div><label>Real Answer:</label> {{answer.actual}}</div>
                </div>
                <md-icon v-if="answer.correct" class="md-list-action correct">check</md-icon>
                <md-icon v-if="!answer.correct" class="md-list-action incorrect">close</md-icon>
            </md-list-item>
        </md-list>
    </div>
</template>
<script src="./AnswersList.js"></script>
<style scoped src="./AnswersList.css"></style>