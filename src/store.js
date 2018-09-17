import Vue from "vue";
import Vuex from "vuex";
import mockUserService from "./services/mock-user-service";
import mockQuizService from "./services/mock-quiz-service";
import navigation from "./constants/navigation";

Vue.use(Vuex);

// Define the services to use for interacting with data
// NOTE: MockServices provide in-memory data manipulation for serverless demoing of frontend capabilities.
const SERVICES =  {
  USER: mockUserService,
  QUIZ: mockQuizService
}

export default new Vuex.Store({
  /* -- STATE PROPERTIES -- */
  state: {
    username: undefined,
    quizList: [],
    activeQuiz: {},
    selectedQuizBrief: {},
    currentQuestionIndex: 0,
    recentQuizResultsSummary: [],
    quizResultsList: [],
    activeQuizResult: {}
  },

  /* -- COMPUTED STATE DATA ACCESS -- */
  getters: {
    isLoggedIn: state => state.username !== null && state.username !== undefined,
    currentQuestion: state => {
      if (state.activeQuiz && state.activeQuiz.questions && state.activeQuiz.questions.length > state.currentQuestionIndex) {
        return state.activeQuiz.questions[state.currentQuestionIndex];
      }
      return null;
    }
  },

  /* -- SYNCHRONOUS MODIFICATIONS TO STATE -- */
  mutations: {
    SET_USERNAME (state, username) {
      state.username = username;
    },
    SET_QUIZ_LIST (state, quizList) {
      state.quizList = quizList;
      state.activeQuiz = {};
      state.currentQuestionIndex = -1;
    },
    SET_SELECTED_QUIZ_BRIEF (state, quizBrief) {
      state.selectedQuizBrief = quizBrief;
    },
    SET_ACTIVE_QUIZ (state, activeQuiz) {
      state.activeQuiz = activeQuiz;
      state.currentQuestionIndex = 0;
    },
    ADVANCE_QUESTION (state) {
      state.currentQuestionIndex++;
    },
    SET_QUIZ_RESULTS_LIST (state, quizResultsList) {
      state.quizResultsList = quizResultsList;
    },
    SET_ACTIVE_QUIZ_RESULTS (state, activeQuizResults) {
      state.activeQuizResult = activeQuizResults;
    },
    SET_RECENT_QUIZ_RESULTS_LIST (state, recentQuizResultsSummary) {
      state.recentQuizResultsSummary = recentQuizResultsSummary;
    }
  },

  /* -- ASYNCHRONOUS MODIFICATIONS TO STATE -- */
  actions: {
    login ({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        SERVICES.USER.login(username, password).then(username => {
          commit('SET_USERNAME', username);
          resolve(true);
        });
      });
    },
    logout ({ commit }) {
      SERVICES.USER.logout().then(loggedOut => {
        commit('SET_USERNAME', undefined);
      });
    },
    loadQuizList ({ commit }) {
      SERVICES.QUIZ.getQuizList().then(quizList => {
        commit('SET_QUIZ_LIST', quizList);
      });
    },
    loadQuiz ({ commit}, { quizBrief }) {
      return new Promise((resolve, reject) => {
        SERVICES.QUIZ.getQuiz(quizBrief).then(quiz =>{
          commit('SET_ACTIVE_QUIZ', quiz);
          resolve(true);
        });
      });
    },
    submitQuiz({ commit }, { quiz, answers }) {
      return new Promise((resolve, reject) => {
        SERVICES.QUIZ.submitAnswers(quiz, answers).then(results => {
          commit('SET_ACTIVE_QUIZ_RESULTS', results);
          commit('SET_ACTIVE_QUIZ', {});
          resolve(true);
        });
      });
    },
    loadRecentResults({ commit }) {
      SERVICES.QUIZ.getRecentResults().then(results => {
        commit('SET_RECENT_QUIZ_RESULTS_LIST', results);
      });
    },
    loadResultsList({ commit }) {
      return new Promise((resolve, reject) => {
        SERVICES.QUIZ.getResultsList().then(results => {
          commit('SET_QUIZ_RESULTS_LIST', results);
          resolve(true);
        })
      });
    },
    loadResultDetails({ commit }, { resultBrief }) {
      return new Promise((resolve, reject) => {
        SERVICES.QUIZ.getResultDetails(resultBrief).then(results => {
          commit('SET_ACTIVE_QUIZ_RESULTS', results);
          resolve(true);
        });
      });
    }
  }
});
