import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
        }
    },
    actions:{
        setToken: (context,tokenData) => {
            context.commit('SET_TOKEN', tokenData)
        },

        setUserData: (context, tokenData) => {
            axios.get("http://localhost/instamedic-be/api/user/getLoggedUser", {
                headers:{
                            "Authorization" : tokenData  ,
                            "Content-Type" : "application/javascript",
                        },
            }).then( (response) => {
                context.commit('SET_USERDATA', response.data)
            })
        },
    },

    getters:{
        getToken:(state) => (state.token),
        getUserData: (state) => (state.userData),
    }
})