import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './route/route'
const config = require('../vue.config')

window.axios = require('axios')
Vue.prototype.$config = config
Vue.config.productionTip = false

new Vue({
  data:config,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
