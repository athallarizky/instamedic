<template>
    <section id="Login">
        <div class="container">
            <h1 class="logo text-center pt-3">Instamedic</h1>
            <div class="row mx-auto">
                <div class="card o-hidden border-2 mx-auto card-size">
                    <div class="card-body">
                        <div class="px-2">
                            <form class="user" action="http://localhost/instamedic-be/api/register" method="POST">
                                <div class="form-group">
                                    <label for="inputName">Nama Lengkap</label>
                                    <input type="text" class="form-control form-control-user" id="inputName"
                                        aria-describedby="nameHelp" placeholder="Nama lengkap" name="fullname">
                                </div>
                                <div class="form-group">
                                    <label for="inputUsername">Username</label>
                                    <input type="text" class="form-control form-control-user" id="inputUsername"
                                        aria-describedby="unameHelp" placeholder="Username" name="username">
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">E-mail</label>
                                    <input type="email" class="form-control form-control-user" id="inputEmail"
                                        aria-describedby="emailHelp" placeholder="E-mail" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" class="form-control form-control-user" id="inputPassword"
                                        placeholder="Password" name="password">
                                </div>
                                <div>
                                    <button type="submit" class="btn btnGreen mx-auto d-block">Daftar</button>
                                    <br>
                                </div>
                            </form>
                            <div class="text-center">
                                <p>Sudah punya akun? <a class="small" href="login.html">Login Sekarang!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #Login {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(196, 196, 196, 0.19);
        height: 100vh;
    }

    .card-size{
        width: 400px;
    }

    .btn{
        padding: 10px 25px;
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