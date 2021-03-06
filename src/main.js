import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
Vue.config.productionTip = false
Vue.use(VueFullPage);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
