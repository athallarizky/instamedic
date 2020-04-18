<template>
    <section id="View-Profile">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-4">
                    <img src="/assets/img/undraw_wash_hands_nwl2.svg" alt="Profil" width="270px">
                </div>
                <div class="col-md-4">
                    <form class="form-konten col-xs-3 mt-5">
                        <div class="form-group">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control" id="inputNamaDokter" aria-describedby="nameHelp" disabled v-model="fullname">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="inputUnameDokter" aria-describedby="unameHelp" disabled v-model="username">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="email">E-mail</label>
                            <input type="text" class="form-control" id="inputEmailDokter" aria-describedby="emailHelp" disabled v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="inputPassword" disabled value="******">
                        </div>
                    </form>
                    <router-link to="/dashboard/updateProfile">
                        <button type="submit" class="btn btnGreen float-right">Ubah Profil</button>
                    </router-link>
                    
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
}
</script>

<style scoped>
    .form-control{
        width: 350px;
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
