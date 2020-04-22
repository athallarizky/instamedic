<template>
    <section id="Alert-Box">
        <div v-if="statusInfo" class="alert alert-success" role="alert">
            {{ message}}
        </div>
        <div v-if="!statusInfo" class="alert alert-danger" role="alert">
            {{ message}}
        </div>
    </section>


</template>

<script>
    export default {
        data() {
            return {
                message: '',
                statusInfo: false
            }
        },
        props: [
            'messages',
            'status'
        ],
        mounted() {
            this.message = this.messages,
                this.statusInfo = this.status
            console.log(this.status)
        }
    }
</script>