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
        </div>
    </section>
</template>

<script>
import Alerts from '../../Shared/Alerts'

export default {
    data(){
        return{
            obats:[],
            message:'',
            success: false,
        }
    },
    created(){
        if (this.$store.state.userData['role'] == 'user') this.$router.push({ path: '/' })
        axios.get("http://localhost/instamedic-be/api/medicine/getAll").then(res => this.obats = res.data)
    },
    methods:{
        deleteMedicine: function(id){
            axios.delete("http://localhost/instamedic-be/api/medicine/delete/" + id, {
                headers:{
                    "Authorization" : this.$store.state.token,
                    "Content-Type" : "application/javascript",
                },
            }).then( (res)=>{
                if(res.data.success){
                    this.success = true
                    this.$store.dispatch('setUserData', this.$store.state.token)
                    // window.location.reload(true)
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
    .medicine-header{
        display: flex;
    }
    .add-medicine{
        background: #8FB9A8;
        border: none;
    }

</style>