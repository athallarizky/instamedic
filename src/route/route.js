import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Component
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Template from '../components/Dashboard/Template'
import ViewProfile from '../components/Dashboard/Profile/ViewProfile'
import UpdateProfile from '../components/Dashboard/Profile/UpdateProfile'

import ViewMedicine from '../components/Dashboard/Medicine/ViewMedicine'
import AddMedicine from '../components/Dashboard/Medicine/AddMedicine'
import UpdateMedicine from '../components/Dashboard/Medicine/UpdateMedicine'

import ViewDoctor from '../components/Dashboard/Doctor/ViewDoctor'
import AddDoctor from '../components/Dashboard/Doctor/AddDoctor'

import ViewConsultation from '../components/Dashboard/Consultation/ViewConsultation'
import AddConsultation from '../components/Dashboard/Consultation/AddConsultation'

const routes = [
  { path:'', component:Home },
  { path:'/register', component:Register},
  { path:'/login', component:Login},
  { path:'/dashboard', component:Template,
    children: [
      { path:'/', component:ViewProfile },
      { path:'updateProfile', component:UpdateProfile},

      { path:'medicine', component:ViewMedicine},
      { path:'medicine/addMedicine', component:AddMedicine},
      { path:'medicine/updateMedicine/:id', component:UpdateMedicine, name:'updateMedicine'},

      { path:'doctor', component:ViewDoctor},
      { path:'doctor/addDoctor', component:AddDoctor},

      { path:'consultation', component:ViewConsultation},
      { path:'consultation/:username', component:AddConsultation, name:'addConsultation'}
    ]
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
})