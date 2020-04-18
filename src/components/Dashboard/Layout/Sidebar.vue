<template>
    <section id="Dashboard-Sidebar">
        <!-- sidebar -->
            <div class="col-2 bg-dark position-fixed" id="sidebar">
                <nav class="navbar navbar-expand mb-4 static-top">
                    <a class="navbar-brand text-white mx-auto" href="#">Instamedic</a>
                </nav>
                <ul class="navbar-nav">
                    <hr class="sidebar-divider">
                    <li class="nav-item active mx-auto">
                        <a class="nav-link text-white" href="adminhome.html"><span>Home</span></a>
                    </li>
                    <hr class="sidebar-divider">
                    <li class="nav-item mx-auto">
                        <a class="nav-link text-white" href="adminobat.html"><span>Obat</span></a>
                    </li>
                    <hr class="sidebar-divider">
                    <li class="nav-item mx-auto">
                        <a class="nav-link text-white" href="admindokter.html"><span>Dokter</span></a>
                    </li>
                </ul>
            </div>
    </section>
</template>


<style scoped>
    #sidebar {
        height: 100%;
    }
</style>