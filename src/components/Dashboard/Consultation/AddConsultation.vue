<template>
    <section id="Add-Consultation">
        <div class="container">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#">
                            <router-link to="/dashboard/consultation">Konsultasi</router-link>
                        </a></li>
                    <li class="breadcrumb-item active">Data Konsultasi</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-5">
                    <h4>Data Konsultasi</h4>
                    <div class="form-group">
                        <label for="nama">Nama Dokter</label>
                        <input type="text" class="form-control" id="inputNamaDokter" aria-describedby="nameHelp"
                            v-model="doctorName" readonly>
                    </div>
                    <div class="form-group">
                        <label for="nama">Spesialis</label>
                        <input type="text" class="form-control" id="inputNamaDokter" aria-describedby="nameHelp"
                            v-model="doctorSpec" readonly>
                    </div>
                    <form class="form-konten col-xs-3 mt-5">
                        <div class="message-info" v-if="message != ''">
                            <Alerts :messages="message" :status="success" />
                        </div>
                        <div class="form-group">
                            <label for="subjek">Subjek</label>
                            <input type="text" class="form-control input-con-data" id="inputSubjek" aria-describedby="subjekHelp" v-model="subject" placeholder="misal : ciri-ciri penyakit jantung">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="desc">Deskripsi</label>
                            <textarea class="form-control input-con-data" aria-label="With textarea" v-model="description" required placeholder="misal : saya ingin bertanya tentang ciri-ciri penyakit jantung"></textarea>
                        </div>
                        
                    </form>
                    <p class="mb-4"> <b>*)</b> sebelum memulai percakapan kamu harus memasukan subjek dan deskripsi pesan terlebih dahulu. </p>
                    <button type="submit" class="btn btnGreen mx-auto d-block" @click="insertConsult">Mulai Percakapan</button>
                </div>
                <div class="col-md-5 pt-5">
                    <img src="/assets/img/undraw_share_opinion_jpw0.svg" alt="Profil" width="600px">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Alerts from '../../Shared/Alerts'
export default {
    data() {
        return {
            doctorName: '',
            doctorSpec: '',
            subject:'',
            description:'',

            message:'',
            success: false,
        }
    },
    created() {
        axios.get("http://localhost/instamedic-be/api/user/getDoctor/" + this.$route.params.username, {
                headers: {
                    "Authorization": this.$store.state.token,
                    "Content-Type": "application/javascript",
                },
            })
            .then((res) => {
                this.doctorName = res.data.fullname
                this.doctorSpec = res.data.specialist
            })
    },
    methods: {
        insertConsult: function(e){
            e.preventDefault();

            if(this.subject == '' || this.description == ''){
                return this.message = "Data tidak boleh ada yang kosong!"
            }

            axios({
                method:'POST',
                url:'http://localhost/instamedic-be/api/consultation/create/' + this.$route.params.username,
                headers:{
                    "Authorization" : this.$store.state.token,
                    "Content-Type" : "application/javascript",
                },
                data:{
                    subject: this.subject,
                    description: this.description,
                }

            }).then( (res)=>{
                if(res.data.success){
                    this.success = true
                    this.$router.push({ path: '/dashboard/consultation' })
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
    .input-con-data{
        font-family: inherit;
    }

    .btnGreen {
        padding: 10px 25px;
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