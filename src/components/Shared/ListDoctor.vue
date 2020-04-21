<template>
    <section id="List-Doctor">
        <div class="message-info" v-if="message != ''">
            <Alerts :messages="message" :status="success" />
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
                        <router-link v-else :to="{name:'addConsultation', params:{ username:doctor.username} }" class="btn btn-warning d-block mx-auto btnGreen">
                            Konsultasi
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Alerts from './Alerts'

    export default {
        data() {
            return {
                doctors: [],
                message: '',
                success: false,
            }
        },
        async mounted() {
            await axios.get( this.$config.devServer.proxy + "user/getAllDoctor", {
                headers: {
                    "Authorization": this.$store.state.token,
                    "Content-Type": "application/javascript",
                },
            }).then((res) => {
                // console.log(res.data)
                this.doctors = res.data
                this.$emit('doctorData', this.doctors)
            })
        },
        methods: {
            deleteDoctor: function (id) {
                axios.delete( this.$config.devServer.proxy + "user/deleteDoctor/" + id, {
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                }).then((res) => {
                    if (res.data.success) {
                        this.success = true
                        this.$router.go(this.$router.currentRoute)
                    }
                    this.message = res.data.message
                });
            }
        },
        components: {
            Alerts
        }
    }
</script>

<style scoped>
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