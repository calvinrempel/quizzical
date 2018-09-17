import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from 'vue-material';
import Vuelidate from 'vuelidate';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import dateFilter from "./filters/date-filter";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueMaterial);

dateFilter(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
