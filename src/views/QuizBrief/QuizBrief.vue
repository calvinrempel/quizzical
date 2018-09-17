<template>
    <div class="quiz-brief md-layout md-alignment-center-center">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">{{quiz.title}}</div>
                <div class="md-subhead">Questions: {{quiz.questionCount}}</div>
            </md-card-header>
            <md-card-content>
                {{quiz.description}}
            </md-card-content>
            <md-card-actions>
                <md-button @click="returnToList()" class="md-raised">Back</md-button>
                <md-button @click="goToQuiz()" class="md-raised md-primary">Start Quiz</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script src="./QuizBrief.js"></script>
<style scoped src="./QuizBrief.css"></style>