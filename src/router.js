import Vue from "vue";
import Router from "vue-router";
import navigation from "./constants/navigation";
import Login from "./views/Login/Login.vue";
import Landing from "./views/Landing/Landing.vue";
import store from "./store";
import Dashboard from "./views/Dashboard/Dashboard.vue";
import Quiz from "./views/Quiz/Quiz.vue";
import QuizBrief from "./views/QuizBrief/QuizBrief.vue";
import QuizResults from "./views/QuizResults/QuizResults.vue";
import QuizResultsList from "./views/QuizResultsList/QuizResultsList.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Login,
      requireLogin: false
    },
    {
      path: navigation.login,
      component: Login,
      requireLogin: false
    },
    {
      path: navigation.landing,
      component: Landing,
      requireLogin: true,
      children: [
        { path: '', component: Dashboard },
        { path: navigation.landingSubroutes.quizBrief, component: QuizBrief },
        { path: navigation.landingSubroutes.quiz, component: Quiz },
        { path: navigation.landingSubroutes.quizResults, component: QuizResults },
        { path: navigation.landingSubroutes.resultList, component: QuizResultsList }
      ]
    }
  ]
});

/** If not logged in, redirect navigation attempts to login page for protected routes. */
router.beforeEach((to, from, next) => {
  if (!store.getters.isLoggedIn) {
    const route = router.options.routes.find(route => route.path.indexOf(to.path) === 0);
    if (route && route.requireLogin) {
      next(navigation.login);
      return;
    }
  }
  next();
});

export default router;