<template>
    <section id="Add-Doctor">
        <div class="container">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#">
                            <router-link to="/dashboard/doctor">Dokter</router-link>
                        </a></li>
                    <li class="breadcrumb-item active">Tambah Dokter</li>
                </ol>
            </nav>
            <div class="row">

                <div class="col-md-4">
                    <h4>Tambah Dokter</h4>
                    <form class="form-konten col-xs-3 mt-5">
                        <div class="message-info" v-if="message != ''">
                            <Alerts :messages="message" :status="success" />
                        </div>
                        <div class="form-group">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control" id="inputNamaDokter" aria-describedby="nameHelp"
                                v-model="fullname">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="inputUnameDokter" aria-describedby="unameHelp"
                                v-model="username">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="email">E-mail</label>
                            <input type="text" class="form-control" id="inputEmailDokter" aria-describedby="emailHelp"
                                v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="inputPassword" aria-describedby="passHelp"
                                v-model="password">
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="specialist">Specialist</label>
                            <input type="text" class="form-control" id="inputSpecialistDokter"
                                aria-describedby="specialistHelp" v-model="specialist">
                        </div>
                    </form>
                    <button type="submit" class="btn btnGreen float-right" @click="insertDoctor">Simpan</button>
                    <router-link to="/dashboard">
                        <button type="submit" class="btn btnWhite float-right">Batalkan</button>
                    </router-link>

                </div>
                <div class="col-md-4">
                    <img src="/assets/img/undraw_online_cv_qy9w.svg" alt="Profil" width="700px">
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
                fullname: '',
                username: '',
                email: '',
                password: '',
                specialist: '',

                message: '',
                success: false,
            }
        },
        methods: {
            insertDoctor: function (e) {
                e.preventDefault()

                if (this.fullname == '' || this.username == '' || this.email == '' || this.password == '' || this
                    .specialist == '') {
                    return this.message = "Data tidak boleh ada yang kosong!"
                }

                axios({
                    method: 'POST',
                    url: this.$config.devServer.proxy + 'user/createDoctor',
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                    data: {
                        fullname: this.fullname,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        specialist: this.specialist
                    }

                }).then((res) => {
                    if (res.data.success) {
                        this.success = true
                        this.$router.push({
                            path: '/dashboard/doctor'
                        })
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
    .btn {
        margin-right: 10px;
        width: 120px;
    }

    .btnGreen {
        color: white;
        background: #8FB9A8;
        border: none;
        border-radius: 8px;
    }

    .btnGreen:hover {
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

    .input-photo {
        width: 300px;
    }


    .button-area {
        margin-top: 30px;
    }
</style>