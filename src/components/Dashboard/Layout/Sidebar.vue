<template>
    <section id="Dashboard-Sidebar">
        <!-- sidebar -->
            <div class="col-2 bg-dark position-fixed" id="sidebar">
                <nav class="navbar navbar-expand mb-4 static-top">
                    <a class="navbar-brand text-white mx-auto" href="#">Instamedic</a>
                </nav>
                <ul class="navbar-nav">
                    

                    <li class="nav-item active mx-auto">
                        <router-link to="/" class="nav-link text-white"> Home </router-link>
                    </li>

                    <li class="nav-item mx-auto" v-if="this.$store.state.userData['role'] != 'user'">
                        <router-link to="/dashboard/medicine" class="nav-link text-white"> Obat </router-link>
                    </li>

                    <li class="nav-item mx-auto">
                        <router-link to="/dashboard/doctor" class="nav-link text-white"> Dokter </router-link>
                    </li>
                </ul>
            </div>
    </section>
</template>


<style scoped>
    #sidebar {
        height: 100%;
    }

    .nav-link{
        text-decoration: none !important;
    }

    .nav-item{
        padding: 15px 0 15px 0;
    }
</style>