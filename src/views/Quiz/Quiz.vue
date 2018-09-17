<template>
    <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-60 md-small-size-100 question-header">
            <h1>{{activeQuiz.title}}</h1>
            <h3>Question {{currentQuestionIndex + 1}} of {{questionCount}}</h3>
        </div>

        <md-card class="md-layout-item md-size-60 md-small-size-100">
            <md-card-header>
                <div class="md-title">
                    {{question.text}}
                </div>
            </md-card-header>

            <md-card-content>
                <md-list>
                    <md-list-item v-for="option of question.options">
                        <md-radio v-model="answer" :value="option">{{option}}</md-radio>
                    </md-list-item>
                </md-list>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="submitting" />

            <md-card-actions>
                <md-button class="md-raised md-primary" @click="advance" :disabled="answer === null || submitting">
                    <span v-if="!isLastQuestion">Next Question</span>
                    <span v-if="isLastQuestion">View Results</span>
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script src="./Quiz.js"></script>
<style scoped src="./Quiz.css"></style>