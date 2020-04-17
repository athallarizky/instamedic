<template>
<section id="Login">
        <div class="container">
            <h1 class="logo text-center pt-3">Instamedic</h1>
            <div class="row mx-auto">
                <div class="card o-hidden border-2 mx-auto card-size">
                    <div class="card-body">
                        <div class="px-2">  
                            <div class="message-info" v-if="message != ''">
                                <Alerts :messages="message" :status="success" />
                            </div> 
                            <form class="user" @submit="formSubmit" >
                                <div class="form-group">
                                    <label for="inputUsername">Username</label>
                                    <input type="text" class="form-control form-control-user" id="inputUsername"
                                        aria-describedby="unameHelp" placeholder="Username" v-model="username" name="username" @change="resetStatus">
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" class="form-control form-control-user" id="inputPassword"
                                        placeholder="Password" v-model="password" name="password" @change="resetStatus">
                                </div>
                                <div>
                                    <button type="submit" class="btn btnGreen mx-auto d-block">Login</button>
                                    <br>
                                </div>
                            </form>
                            <div class="text-center">
                                <p>Belum punya akun? 
                                    <router-link to="/register"> <a href="#">Register Sekarang.</a> </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Alerts from './Shared/Alerts'

export default {
    data(){
        return{
            username:'',
            password:'',
            message:'',
            success: false,
        }
    },
    methods: {

        formSubmit: function(e){
            e.preventDefault();

            axios({
                method:'POST',
                url:'http://localhost/instamedic-be/api/login',
                headers:{
                    "Content-Type" : "application/x-www-form-urlencoded",
                },
                data:{
                    username: this.username,
                    password: this.password,
                }

            }).then( (res)=>{
                console.log(res.data)
                if(res.data.success){
                    this.success = true
                    this.$store.dispatch('setToken', res.data.token)
                    this.$store.dispatch('setUserData', res.data.token)
                }
                this.message = res.data.message
            });
        },

        resetStatus: function(){
            this.message = '',
            this.success = false
        }
    },
    components:{
        Alerts
    }
}
</script>

<style scoped>
    #Login {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(196, 196, 196, 0.19);
        height: 100%;
    }

    .card-size{
        width: 400px;
    }

    .btn{
        padding: 10px 25px;
    }

    .btnGreen {
        color: white;
        background: #8FB9A8;
        border: none;
        border-radius: 8px;
    }

    .btnGreen:hover{
        color: white;
        background: #729486;
    }
</style>