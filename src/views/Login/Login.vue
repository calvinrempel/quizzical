<template>
    <div class="login">
      <form novalidate class="md-layout" @submit.prevent="attemptLogin">
        <md-card class="md-layout-item md-size-35 md-small-size-100">
          <md-card-header>
            <div class="md-title">Welcome to Quizzical!</div>
            <div class="md-subhead">Login to continue</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">

              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('username')">
                  <label for="username">Username</label>
                  <md-input name="username" id="username" v-model="$v.username.$model" :disabled="sending" />
                  <span class="md-error" v-if="!$v.username.required">Username is required</span>
                </md-field>
              </div>

              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('password')">
                  <label for="password">Password</label>
                  <md-input name="password" id="password" type="password" v-model="$v.password.$model" :disabled="sending" />
                  <span class="md-error" v-if="!$v.password.required">Password is required</span>
                  <span class="md-error" v-else-if="!$v.password.minlength">Password must be at least 8 characters</span>
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
          </md-card-actions>

        </md-card>
      </form>
    </div>
</template>
<script src="./Login.js"></script>
<style scoped src="./Login.css"></style>