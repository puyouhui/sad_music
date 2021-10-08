import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll';

Vue.prototype.$BScroll = BScroll;
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

})
