<template>
    <section id="Dashboard-Navbar">
        <nav class="navbar navbar-expand navbar-light p-3 mb-4 static-top">
            <p class="my-auto">Selamat datang, <b> {{ this.$store.state.userData["fullname"] }} </b> </p>
            <button class="signout-button ml-auto" @click="signOut">
                <i class="fa fa-sign-out ml-auto"></i> Keluar
            </button>
        </nav>
    </section>
</template>

<script>
export default {
    methods:{
        signOut: function(){
            this.$store.dispatch('unsetToken')
            this.$store.dispatch('unsetUserData')
            this.$router.push({ path: '/' })
        }
    }
}
</script>

<style scoped>
    #Dashboard-Navbar{
        margin-left: 16.666667%;
        padding: 0 2.5%;
        background: #dfe4ea;
    }

    .signout-button{
        border:none;
        border-radius: 5px;
        padding: 5px 20px;
        color: #FFF;
        background: #747d8c;
    }

    .signout-button:hover{
        background: #57606f;
    }
</style>