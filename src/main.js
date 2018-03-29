import './common/rem';
import Vue from 'vue';
import Main from './Main.vue';
import { router } from './router';
new Vue({
  router,
  el: '#app',
  render: h => h(Main)
});
