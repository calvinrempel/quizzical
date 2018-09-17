<template>
    <div class="md-layout md-alignment-center-center">
        <div class="page-title md-layout-item md-size-60 md-small-size-100">
            <h1>Dashboard</h1>
        </div>

        <div class="md-layout md-layout-item md-size-60 md-small-size-100">
            <md-card class="md-layout-item md-size-60 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Quizzes</div>
                </md-card-header>

                <md-card-content>
                    <QuizList v-bind:quizzes="quizzes" v-on:quiz-selected="goToQuizBrief"></QuizList>
                </md-card-content>
            </md-card>

            <md-card class="md-layout-item md-size-40 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Recent Results</div>
                    <a href="#" class="md-subhead view-all" @click="viewAllResults">
                        (View All)
                    </a>
                </md-card-header>

                <md-card-content>
                    <ResultsList v-bind:results="recentResults" v-on:result-selected="goToResult"></ResultsList>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>
<script src="./Dashboard.js"></script>
<style scoped src="./Dashboard.css"></style>