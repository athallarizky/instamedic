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
import Template from './components/Dashboard/Template'
import ViewProfile from './components/Dashboard/Profile/ViewProfile'
import UpdateProfile from './components/Dashboard/Profile/UpdateProfile';

const routes = [
  { path:'/', component:Home },
  { path:'/register', component:Register},
  { path:'/login', component:Login},
  { path:'/dashboard', component:Template,
    children: [
      { path:'/', component:ViewProfile },
      { path: 'updateProfile', component:UpdateProfile}
    ]
  },
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
