<template>
    <section id="Search-area">
        <input type="text" class="form-control search-med mx-auto mb-3"
            placeholder="Kamu sakit apa? ex: Batuk, Pilek, Pusing" v-model="search">

        <!--Hasil pencarian obat-->
        <div id="resultObat" v-if="search != ''">
            <p>Hasil pencarian obat dari sakit: <b>{{search}} {{ filterMedicines.length == 0 ? 'tidak ditemukan' : ''}}
                </b></p>

            <div class="row">
                <div class="col-md-3 mb-5" v-for="obat in filterMedicines" :key="obat.id">
                    <div class="card">
                        <div class="card-body">
                            <img src="/assets/img/undraw_medicine_b1ol.svg" alt="fotoObat" width="180px"
                                class="mx-auto d-block">
                            <h5 class="card-title">{{ obat.name }}</h5>
                            <p class="card-text">{{ obat.description }}.</p>
                            <p>Kategori: {{ obat.category }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="filterMedicines.length == 0">
                <img src="/assets/img/undraw_empty_xct9.svg" height="300px" class="mx-auto d-block mb-5">
            </div>
        </div>
        <div v-else class="search-something">
            <img src="/assets/img/undraw_people_search_wctu.svg" height="400px" class="mx-auto d-block mb-5 mt-5">
        </div>




    </section>
</template>

<style scoped>
    .search-med {
        width: 500px;
    }
</style>

<script>
    export default {
        data() {
            return {
                obats: [],
                search: '',
            }
        },
        created() {
            axios.get(this.$config.devServer.proxy + "medicine/getAll").then(res => this.obats = res.data)
        },
        computed: {
            filterMedicines: function () {
                return this.obats.filter((obat) => {
                    let data = obat.name.toLowerCase().match(this.search) ||
                        obat.category.toLowerCase().match(this.search) ||
                        obat.name.match(this.search) ||
                        obat.category.match(this.search)
                    if (!data) return null
                    return data;
                });
            }
        }
    }
</script>