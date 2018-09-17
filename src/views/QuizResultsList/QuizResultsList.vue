<template>
    <div class="md-layout md-alignment-center-center">
        <div class="page-title md-layout-item md-size-60 md-small-size-100">
            <h1>History</h1>
            <div class="md-layout">
                <h3 class="md-layout-item md-size-50">Your quiz history</h3>
                <div class="md-layout-item md-size-50 align-right">
                    <md-button class="md-raised md-primary" @click="goToDashboard">Dashboard</md-button>
                </div>
            </div>
        </div>

        <md-card class="md-layout-item md-size-60 md-small-size-100">
            <md-card-header>
                <div class="md-title">Quiz Results</div>
            </md-card-header>

            <md-card-content>
                <ResultsList v-bind:results="results" v-on:result-selected="goToResult"></ResultsList>
            </md-card-content>
        </md-card>
    </div>
</template>
<script src="./QuizResultsList.js"></script>
<style scoped src="./QuizResultsList.css"></style>