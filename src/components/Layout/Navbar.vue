<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="nav">
        <div class="container">
        <a class="navbar-brand logo" href="#">Instamedic</a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <form class="form-inline navbar-nav ml-auto">
                <router-link to="/login">
                    <button class="btn btnWhite mx-2" type="submit">Masuk</button>
                </router-link>
                <router-link to="/register">
                    <button class="btn btnGreen mx-2" type="submit">Daftar</button>
                </router-link>
            </form>
        </div>
        </div>
    </nav>
</template>

<style scoped>
    .btnWhite {
        color: #8FB9A8;
        background: white;
        border: solid #8FB9A8 1px;
        border-radius: 8px;
    }

    .btnWhite:hover {
        color: white;
        background: #8FB9A8;
        border: none;
    }

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