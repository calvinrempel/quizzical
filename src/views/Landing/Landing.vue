<template>
    <div class="page-container">

        <md-toolbar class="md-primary main-header">
            <a href='#' @click="goToDashboard" class="md-title">QuickQuiz</a>

            <div class="md-toolbar-section-end">
                <md-menu md-size="medium" md-align-trigger>
                    <md-button md-menu-trigger>
                        <span>
                            <md-icon>person</md-icon> {{username}}
                        </span>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="logout">Logout</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </div>
        </md-toolbar>

        <md-content class="main-content">
            <router-view></router-view>
        </md-content>

        <div class="main-footer">
            <div class="inset">
                &copy; Copyright Notice Placeholder
            </div>
        </div>
    </div>
</template>
<script src="./Landing.js"></script>
<style scoped src="./Landing.css"></style>