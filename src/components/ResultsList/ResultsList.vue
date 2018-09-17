<template>
    <div class="results-list">
        <md-list>
            <md-list-item v-for="(result, index) in results" @click="selectResult(result)">
                <span class="percent">
                    {{percentages[index]}}%
                </span>
                <div class="md-list-item-text">
                    <span>{{result.quizTitle}}</span>
                    <span>{{result.attemptDate | date}}</span>
                </div>
                <md-button class="md-icon-button md-list-action">
                    <md-icon>chevron_right</md-icon>
                </md-button>
            </md-list-item>
        </md-list>
    </div>
</template>
<script src="./ResultsList.js"></script>
<style scoped src="./ResultsList.css"></style>