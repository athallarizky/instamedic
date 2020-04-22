<template>
    <section id="Message-Consultation">
        <div class="container">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="#">
                            <router-link to="/dashboard/consultation">Konsultasi</router-link>
                        </a></li>
                    <li class="breadcrumb-item active">Pesan Konsultasi</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-5">
                    <h5>Pesan dikirim oleh:
                        {{ $store.state.userData['id'] != consultData.createdBy ? consultData.createdBy : consultData.consultTo }}
                    </h5>
                    
                    <!--Chat Konsultasi-->
                    <div class="panel">
                        <div class="panel-heading bg-dark p-2">
                            <div class="row">
                                <div class="col"><a href="dokterlistkonsul.html"
                                        class="btn btn-secondary btn-sm">Kembali</a></div>
                                <div class="col-6">
                                    <p class="panel-title text-white"> {{consultData.subject}}</p>
                                </div>
                                <div class="col"></div>
                            </div>
                        </div>
                        <div class="panel-body overflow-auto">
                            <div class="message-area" v-for="messageData in messageDatas" :key="messageData.id">
                                <div class="msg_terima" v-if="messageData.senderName != $store.state.userData['id']">
                                    <p>{{ messageData.body }}</p>
                                </div>

                                <div class="msg_kirim" v-else>
                                    <p>{{ messageData.body }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer bg-dark p-2">
                            <div class="input-group">
                                <input id="btn-input" type="text" class="form-control form-control-sm mx-2"
                                    placeholder="Masukkan pesan.." v-model="messageBody">
                                <span class="input-group-btn d-flex">
                                    <button class="btn btnGreen btn-sm" id="btn-chat" @click="sendMessage">Send</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="https://drive.google.com/uc?id=1DPRZKQQz0cMeVYNOGlB378jcrKj8YTUY" alt="Profil"
                        width="550px" class="mt-5">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                messageDatas: [],
                consultData: Object,
                messageBody: '',
            }
        },
        async mounted() {
            await this.fetchConsultData()
            await this.fetchMessage()
        },
        methods: {
            fetchConsultData: async function () {
                await axios.get(this.$config.devServer.proxy + "consultation/get/" + this.$route.params.id, {
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                }).then((res) => {
                    this.consultData = res.data
                    console.log(res.data)
                })
            },

            fetchMessage: async function () {
                await axios.get(this.$config.devServer.proxy + "consultation/message/get/" + this.$route.params
                    .id, {
                        headers: {
                            "Authorization": this.$store.state.token,
                            "Content-Type": "application/javascript",
                        },
                    }).then((res) => {
                    console.log(res.data[0].body)
                    this.messageDatas = res.data
                })
            },

            sendMessage: function () {
                axios({
                    method: 'POST',
                    url: this.$config.devServer.proxy + 'consultation/message/create/' + this.$route.params
                        .id,
                    headers: {
                        "Authorization": this.$store.state.token,
                        "Content-Type": "application/javascript",
                    },
                    data: {
                        body: this.messageBody
                    }

                }).then((res) => {
                    if (res.data.success) {
                        this.success = true
                        this.$router.go(this.$router.currentRoute)
                    }
                    this.message = res.data.message
                });
            }
        }
    }
</script>

<style scoped>
    .panel .panel-heading {
        border-radius: 5px 5px 0px 0px;
    }

    .panel .panel-body {
        background-color: #C4C4C4;
        min-height: 400px;
        max-height: 500px;
        padding: 1px;
        overflow: auto;
    }


    .panel .panel-body .msg_terima {
        background: #38374D;
        color: #FFF;
        border-radius: 8px;
        margin: 10px 25% 10px 10px;
        padding: 1px 5px 1px 5px;
        position: relative;
    }

    .panel .panel-body .msg_kirim {
        background: #487C67;
        color: #FFF;
        border-radius: 8px;
        margin: 10px 10px 10px 25%;
        padding: 1px 5px 1px 5px;
        position: relative;
    }

    .panel .panel-footer {
        border-radius: 0px 0px 5px 5px;
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
</style>