<template>
    <section id="Home">
        <div class="container">
            <!-- Navbar -->
            <Navbar/>

            <!--Header-->   
            <div class="jumbotron text-center" id="header">
                <img class="my-3" src="assets/img/undraw_medical_care_movn.svg" alt="Instamedic Medical Care" width="512px" > 
                <p class="mx-5 px-5">Instamedic merupakan sebuah platform yang akan membantu kamu <b>berkonsultasi</b> dan merekomendasikan <b>obat</b> yang sesuai dengan penyakit yang kamu alami.</p>
            </div>

            <!-- Search Area -->
            <div class="search-area">
                <a class="btn btnGreen button mx-auto" href="#" role="button">Konsultasi Sekarang</a>
                <p class="m-3 text-center">atau</p>
                
            </div>
            <SearchMedicine/>
        </div>

        <!-- Footer -->
        <Footer/>
    </section>
</template>

<style scoped>
    .button{
        background: #8FB9A8;
        color: #FFF;
    }
    .search-area{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .jumbotron{
        margin-bottom: 0;
        padding-bottom: 0;
    }
</style>

<script>

import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import SearchMedicine from './Shared/SearchMedicine';

export default {
    name: 'Home',
    components: {
        Navbar,
        Footer,
        SearchMedicine
    },
    created(){
        if (this.$store.state.token != '') this.$router.push({ path: '/dashboard' })
    },
}
</script>