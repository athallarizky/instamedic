import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        token:'',
        userData:[]
    },
    mutations:{
        SET_TOKEN(state, tokenData){
            state.token = tokenData
        },
        SET_USERDATA(state, userData){
            state.userData = userData
        },
        UNSET_TOKEN(state){
            state.token = ''
        },
        UNSET_USERDATA(state){
            state.userData = []
        }
    },
    actions:{
        setToken: (context,tokenData) => {
            context.commit('SET_TOKEN', tokenData)
            localStorage.setItem('token', tokenData)
        },

        setUserData: (context, tokenData) => {
            axios.get("http://localhost/instamedic-be/api/user/getLoggedUser", {
                headers:{
                            "Authorization" : tokenData  ,
                            "Content-Type" : "application/javascript",
                        },
            }).then( (response) => {
                context.commit('SET_USERDATA', response.data)
                localStorage.setItem('userData', response.data)
            })
        },

        unsetToken: (context) => {
            context.commit('UNSET_TOKEN')
            localStorage.removeItem('token')
        },

        unsetUserData: (context) => {
            context.commit('UNSET_USERDATA')
            localStorage.removeItem('userData')
        }
    },

    getters:{
        getToken:(state) => (state.token),
        getUserData: (state) => (state.userData),
    }
})