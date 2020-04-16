<template>
    <section id="Login">
        <div class="container">
            <h1 class="logo text-center pt-3">Instamedic</h1>
            <div class="row mx-auto">
                <div class="card o-hidden border-2 mx-auto card-size">
                    <div class="card-body">
                        <div class="px-2">
                            <div class="message-info" v-if="message != ''">
                                <div v-if="!success" class="alert alert-danger" role="alert">{{message}}</div>
                                <div v-if="success" class="alert alert-success" role="alert">{{message}}</div>
                            </div>
                            
                            <form class="user" @submit="formSubmit">
                                <div class="form-group">
                                    <label for="inputName">Nama Lengkap</label>
                                    <input type="text" class="form-control form-control-user" id="inputName"
                                        aria-describedby="nameHelp" placeholder="Nama lengkap" v-model="fullname" name="fullname">
                                </div>
                                <div class="form-group">
                                    <label for="inputUsername">Username</label>
                                    <input type="text" class="form-control form-control-user" id="inputUsername"
                                        aria-describedby="unameHelp" placeholder="Username" v-model="username" name="username">
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">E-mail</label>
                                    <input type="email" class="form-control form-control-user" id="inputEmail"
                                        aria-describedby="emailHelp" placeholder="E-mail" v-model="email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" class="form-control form-control-user" id="inputPassword"
                                        placeholder="Password" v-model="password" name="password">
                                </div>
                                <div>
                                    <button type="submit" class="btn btnGreen mx-auto d-block">Daftar</button>
                                    <br>
                                </div>
                            </form>
                            <div class="text-center">
                                <p>Sudah punya akun? <a class="small" href="login.html">Login Sekarang!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>

export default {
    data(){
        return{
            fullname: '',
            username:'',
            email: '',
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
                url:'http://localhost/instamedic-be/api/register',
                headers:{
                    "Content-Type" : "application/x-www-form-urlencoded",
                },
                data:{
                    fullname: this.fullname,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }

            }).then( (res)=>{
                if(res.data.success) this.success = true
                this.message = res.data.message
            });
        }
    }
}
</script>

<style scoped>
    #Login {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(196, 196, 196, 0.19);
        height: 100vh;
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