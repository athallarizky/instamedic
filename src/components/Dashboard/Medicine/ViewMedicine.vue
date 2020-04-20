<template>
    <section id="View-Medicine">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Obat</li>
                </ol>
            </nav>
            <div class="message-info" v-if="message != ''">
                <Alerts :messages="message" :status="success" />
            </div>
            <section class="admin-doctor-view" v-if="this.$store.state.userData['role'] != 'user'">
                <div class="medicine-header">
                    <h4>List Obat</h4>
                    <router-link to="medicine/addMedicine" class="ml-auto ">
                        <button type="button" class="btn btn-success mb-2 add-medicine">Tambah Obat</button>
                    </router-link>
                </div>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama Obat</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(obat, index) in obats" :key="obat.id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ obat.name }}</td>
                            <td>{{ obat.description }}</td>
                            <td>{{ obat.category }}</td>
                            <td>
                                <router-link :to="{name:'updateMedicine', params:{ id:obat.id} }" class="btn btn-warning">
                                    Edit
                                </router-link>
                                | <button class="btn btn-danger" @click="deleteMedicine(obat.id)">hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="user-view" v-else>
                <h4>Cari Obat</h4>
                <SearchMedicine class="search-medicine"/>
            </section>
        </div>
    </section>
</template>

<script>
    import Alerts from '../../Shared/Alerts'
    import SearchMedicine from '../../Shared/SearchMedicine'

    export default {
        data() {
            return {
                obats: [],
                message: '',
                success: false,
            }
        },
        created() {
            // if (this.$store.state.userData['role'] == 'user') this.$router.push({ path: '/' })
            axios.get( this.$config.devServer.proxy + "medicine/getAll").then(res => this.obats = res.data)
        },
        methods: {
            deleteMedicine: function (id) {
                axios.delete( this.$config.devServer.proxy + "medicine/delete/" + id, {
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                }).then((res) => {
                    if (res.data.success) {
                        this.success = true
                        this.$store.dispatch('setUserData', this.$store.state.token)
                        // window.location.reload(true)
                        this.$router.go(this.$router.currentRoute)
                    }
                    this.message = res.data.message
                });
            }
        },
        components: {
            Alerts,
            SearchMedicine
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

    .search-medicine >>> .search-med{
        width: 100%;
    }
</style>