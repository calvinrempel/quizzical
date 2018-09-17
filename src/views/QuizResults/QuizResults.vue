<template>
    <div class="md-layout md-alignment-center-center">
        <div class="page-title md-layout-item md-size-60 md-small-size-100">
            <h1>Results</h1>
            <div class="md-layout">
                <h3 class="md-layout-item md-size-50">{{activeQuizResult.quizTitle}}</h3>
                <div class="md-layout-item md-size-50 align-right">
                    <md-button class="md-raised md-primary" @click="goToAllResults">All Results</md-button>
                    <md-button class="md-raised md-primary" @click="goToDashboard">Dashboard</md-button>
                </div>
            </div>
        </div>

        <div class="md-layout md-layout-item md-size-60 md-small-size-100">
            <md-card class="md-layout-item md-size-60 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Answers</div>
                </md-card-header>

                <md-card-content>
                    <AnswersList v-bind:answers="activeQuizResult.answers"></AnswersList>
                </md-card-content>
            </md-card>

            <md-card class="md-layout-item md-size-40 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Stats</div>
                </md-card-header>

                <md-card-content>
                    <AnswersStats v-bind:answers="activeQuizResult.answers"></AnswersStats>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>
<script src="./QuizResults.js"></script>
<style scoped src="./QuizResults.css"></style>