<template>
    <section id="Update-Medicine">
        <div class="container">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#">
                            <router-link to="/dashboard/medicine">Obat</router-link>
                        </a></li>
                    <li class="breadcrumb-item active">Update Obat</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-md-5">
                    <h4>Update Obat</h4>
                    <div class="message-info" v-if="message != ''">
                        <Alerts :messages="message" :status="success" />
                    </div>
                    <form class="form-konten col-xs-3 mt-5">
                        <div class="form-group">
                            <label for="nama">Nama Obat</label>
                            <input type="text" class="form-control" id="inputNamaObat" aria-describedby="nameHelp"
                                v-model="name" required>
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="desc">Deskripsi</label>
                            <textarea class="form-control" aria-label="With textarea" v-model="description"
                                required></textarea>
                        </div>
                        <div class="form-group col-xs-3">
                            <label for="kategori">Kategori</label>
                            <input type="text" class="form-control" id="inputKategori" aria-describedby="katHelp"
                                v-model="category" required>
                        </div>
                        <label for="kategori">Foto Obat</label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input " id="inputGroupFile01" disabled>
                            <label class="custom-file-label input-photo" for="inputGroupFile01">Choose file</label>
                        </div>
                    </form>
                    <div class="button-area">
                        <button type="submit" class="btn btnGreen float-right" @click="updateMedicine">Simpan</button>
                        <router-link to="/dashboard/medicine">
                            <button type="submit" class="btn btnWhite float-right">Batalkan</button>
                        </router-link>
                    </div>

                </div>
                <div class="col-md-4">
                    <img src="/assets/img/undraw_publish_article_icso.svg" alt="Profil" width="550px">
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
                name: '',
                description: '',
                category: '',
                message: '',
                success: false,
            }
        },
        created() {
            if (this.$store.state.userData['role'] == 'user') this.$router.push({
                path: '/'
            })
            axios.get(this.$config.devServer.proxy + "medicine/get/" + this.$route.params.id)
                .then((res) => {
                    if (res.data == null) this.$router.push({
                        path: '/dashboard/medicine'
                    })
                    this.name = res.data.name
                    this.description = res.data.description
                    this.category = res.data.category
                })
        },
        methods: {
            updateMedicine: function (e) {
                e.preventDefault()

                if (this.name == '' || this.description == '' || this.category == '') {
                    return this.message = "Data tidak boleh ada yang kosong!"
                }

                axios({
                    method: 'PUT',
                    url: this.$config.devServer.proxy + 'medicine/update/' + this.$route.params.id,
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                    data: {
                        name: this.name,
                        description: this.description,
                        category: this.category,
                    }

                }).then((res) => {
                    if (res.data.success) {
                        this.success = true
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