<template>
    <section id="Update-Profile">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#"><router-link to="/dashboard">Home</router-link></a></li>
                    <li class="breadcrumb-item active">Update Profile</li>
                </ol>
            </nav>
            <div class="row">
                
                <div class="col-md-4">
                    <form class="form-konten col-xs-3 mt-5">
                        <div class="form-group">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control" id="inputNamaDokter" aria-describedby="nameHelp" v-model="fullname">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="inputUnameDokter" aria-describedby="unameHelp" v-model="username">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="email">E-mail</label>
                            <input type="text" class="form-control" id="inputEmailDokter" aria-describedby="emailHelp" readonly v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="inputPassword" readonly value="******">
                        </div>
                    </form>
                    <button type="submit" class="btn btnGreen float-right" @click="updateUser">Ubah Profil</button>
                    <router-link to="/dashboard">
                        <button type="submit" class="btn btnWhite float-right">Batalkan</button>
                    </router-link>
                    
                </div>
                <div class="col-md-4">
                    <img src="/assets/img/undraw_social_friends_nsbv.svg" alt="Profil" width="500px">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            fullname: this.$store.state.userData["fullname"],
            username: this.$store.state.userData["username"],
            email: this.$store.state.userData["email"],
            password: this.$store.state.userData["password"],
            
        }
    },
    methods:{
        updateUser: function(e){
            e.preventDefault()

            axios({
                method:'PUT',
                url:'http://localhost/instamedic-be/api/user/update/' + this.$store.state.userData["id"],
                headers:{
                            "Authorization" : this.$store.state.token,
                            "Content-Type" : "application/javascript",
                        },
                data:{
                    fullname: this.fullname,
                    username: this.username,
                }

            }).then( (res)=>{
                if(res.data.success){
                    this.success = true
                    this.$store.dispatch('setUserData', this.$store.state.token)
                    this.$router.push({ path: '/dashboard' })
                }
                this.message = res.data.message
            });
        }
    }
}
</script>

<style scoped>
    .form-control{
        width: 350px;
    }
    .btn{
        margin-right: 10px;
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

    .btnWhite {
        color: #8FB9A8;
        background: #FFF;
        border: 1.5px solid #8FB9A8;
        border-radius: 8px;
    }

    .btnWhite:hover {
        color: #FFF;
        background: #8FB9A8;
    }
</style>
