<template>
    <section id="View-Consultation">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Konsultasi</li>
                </ol>
            </nav>
            <div class="consultation-list">
                <h4>List Pesan Konsultasi</h4>
                <table class="table text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subjek</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Nama Dokter</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(consultData, index) in consultDatas" :key="consultData.id">
                            <th scope="row">{{index+1}}</th>
                            <td>{{consultData.subject}}</td>
                            <td>
                                {{consultData.description}}
                            </td>
                            <td> Dr. {{consultData.consultTo}}</td>
                            <td>
                                <router-link :to="{name:'messageConsultation', params:{ id:consultData.id} }"
                                    class="btn btn-warning">
                                    Baca
                                </router-link>
                                | <button class="btn btn-danger" @click="deleteConsult(consultData.id)">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <section id="doctor-list" v-if="this.$store.state.userData['role'] != 'doctor'">
                    <h4>List Dokter</h4>
                    <ListDoctor />
                    <!-- <ListDoctor @doctorData="showData($event)"/> -->
                </section>

            </div>
        </div>
    </section>
</template>

<script>
    import ListDoctor from '../../Shared/ListDoctor'

    export default {
        data() {
            return {
                consultDatas: [],
            }
        },
        async mounted() {
            await this.fetchData()
        },
        methods: {
            fetchData: async function () {
                await axios.get(this.$config.devServer.proxy + "consultation/getAll/" + this.$store.state.userData[
                    'id'], {
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                }).then((res) => {
                    this.consultDatas = res.data
                    // Still bugs:
                    // this.showData(this.temps)
                })
            },

            // showData: function(datax){
            //     console.log(this.consultDatas.length)
            //     this.temps = datax
            //     for (let i = 0; i < this.consultDatas.length; i++) { 
            //         for (let j = 0; j < datax.length; j++) {
            //             if(this.consultDatas[i].consultTo == datax[j].id){
            //                 this.consultDatas[i].fullname = datax[j].fullname
            //             }


            //         }
            //     }
            // },  

            deleteConsult: function (id) {
                axios.delete(this.$config.devServer.proxy + "consultation/delete/" + id, {
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
            ListDoctor
        }
    }
</script>