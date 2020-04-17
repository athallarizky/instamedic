import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store'

Vue.use(VueRouter);
window.axios = require('axios')

// Component
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const routes = [
  { path:'/', component:Home },
  { path:'/register', component:Register},
  { path:'/login', component:Login},
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
