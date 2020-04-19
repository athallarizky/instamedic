<template>
    <section id="View-Doctor">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Dokter</li>
                </ol>
            </nav>
            <div class="message-info" v-if="message != ''">
                <Alerts :messages="message" :status="success" />
            </div>

            <div class="medicine-header">
                <h4>List Dokter</h4>
                <router-link to="doctor/addDoctor" class="ml-auto ">
                    <button type="button" class="btn btn-success mb-2 add-medicine">Tambah Dokter</button>
                </router-link>
            </div>

            <div class="row">
                <div class="col-md-3 mb-5" v-for="doctor in doctors" :key="doctor.id">
                    <div class="card">
                        <div class="card-body">
                            <img src="/assets/img/undraw_xmas_snowman_k7yf.svg" alt="fotoObat" width="180px"
                                class="mx-auto d-block">
                            <h5 class="card-title mt-4">Dr. {{doctor.fullname}}</h5>
                            <p class="card-text">Spesialis: {{doctor.specialist}}</p>
                            <button type="button" class="btn btn-outline-danger mx-auto d-block mt-5" 
                                v-if=" $store.state.userData['role'] == 'admin'" @click="deleteDoctor(doctor.id)">
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
    </section>
</template>

<script>
import Alerts from '../../Shared/Alerts'

export default {
    data(){
        return{
            doctors:[],
            message:'',
            success: false,
        }
    },
    created() {
        axios.get("http://localhost/instamedic-be/api/user/getAllDoctor", {
            headers: {
                "Authorization": this.$store.state.token,
                "Content-Type": "application/javascript",
            },
        }).then((res) => {
            this.doctors = res.data
        })
    },
    methods:{
        deleteDoctor: function(id){
            axios.delete("http://localhost/instamedic-be/api/user/deleteDoctor/" + id, {
            headers:{
                "Authorization" : this.$store.state.token,
                "Content-Type" : "application/javascript",
            },
        }).then( (res)=>{
            if(res.data.success){
                this.success = true
                this.$router.go(this.$router.currentRoute)
            }
            this.message = res.data.message
        });
        }
    },
    components:{
        Alerts
    }
}
</script>

<style scoped>
    .medicine-header {
        display: flex;
    }

    .add-medicine {
        background: #8FB9A8;
        border: none;
    }
</style>