import './common/rem';
import Vue from 'vue';
import Main from './Main.vue';
import { router } from './router';
import store from './store';
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(Main)
});
