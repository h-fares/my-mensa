<template>
    <b-row class="mensa-body">
        <p>Alle Mensas</p>
        <b-row v-if="!error">
            <b-col  v-for="mensa in mensas" :key="mensa.id" class="col-sm-13 col-lg-4">
                <mensa :mensa="mensa" :is-liked="false"></mensa>
            </b-col>
        </b-row>
        <b-row v-else>
            <b-col>
                <b-alert show variant="danger" style="font-size: .5em">Keine Mensas! Bitte versuchen Sie nochmal</b-alert>
            </b-col>
        </b-row>
    </b-row>
</template>

<script>
import mensaService from "../service/mensaService";
import Mensa from "../components/Mensa";
export default {
    name: "Mensas",
    components: {
      Mensa
    },
    data() {
        return {
            mensas: [],
            date: '',
            error: false

        }
    },
    mounted() {
        this.date = new Date()
        mensaService.getUserNotLikedMensas().then(response => {
            if(!response.data.length) this.error = true
            else this.mensas = response.data
        }).catch(error => {
            if(error.response.status === 401) {
                localStorage.removeItem('token')
                this.$router.push({name: 'Login'})
            } else {
                this.$bvModal.msgBoxOk('Keine Mensas! Bitte versuchen Sie nochmal')
            }
        })
    }
}
</script>

<style scoped>

.mensa-body{
    background-color: rgb(88,131,109);

    font-size: 4em;
    font-weight: bold;
    text-align: center;

}
</style>
