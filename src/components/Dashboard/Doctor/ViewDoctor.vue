<template>
    <section id="View-Doctor">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">Dokter</li>
                </ol>
            </nav>

            <div class="medicine-header">
                <h4>List Dokter</h4>
                <router-link to="doctor/addDoctor" class="ml-auto ">
                    <button type="button" class="btn btn-success mb-2 add-medicine">Tambah Dokter</button>
                </router-link>
            </div>

            <ListDoctor />

        </div>
    </section>
</template>

<script>
    import ListDoctor from '../../Shared/ListDoctor'

    export default {
        components: {
            ListDoctor
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