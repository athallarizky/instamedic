<template>
    <section id="Template">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Navbar -->
        <Navbar />

        <!-- Content -->
        <div class="content">
            <router-view />
        </div>

    </section>
</template>

<script>
    import Navbar from './Layout/Navbar'
    import Sidebar from './Layout/Sidebar'

    export default {
        name: 'Template',
        components: {
            Navbar,
            Sidebar
        },
        created() {
            if (this.$store.state.token == '') this.$router.push({
                path: '/login'
            })
        },

    }
</script>

<style scoped>
    .content {
        margin-left: 16.666667%;
    }
</style>