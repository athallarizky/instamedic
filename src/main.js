import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter);
window.axios = require('axios')

const routes = [
  { path:'/', component:Home },
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
