<template>
    <div class="quiz-list">
        <md-list>
            <md-list-item v-for="quiz in quizzes" @click="selectQuiz(quiz)">
                <span class="md-list-item-text">{{quiz.title}}</span>
                <md-button class="md-icon-button md-list-action">
                    <md-icon>chevron_right</md-icon>
                </md-button>
            </md-list-item>
        </md-list>
    </div>
</template>
<script src="./QuizList.js"></script>
<style scoped src="./QuizList.css"></style>