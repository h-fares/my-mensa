<template>
    <b-row class="mensa-near-me-body">
        <p style="font-size: 2rem">Alle Mensas neben Dir!</p>
        <b-row class="justify-content-md-center">
            <b-col class="col-sm-13 col-lg-3">
                <label for="demo-sb" style="font-size: 1.5rem">Distanz</label>
                <b-form-spinbutton id="demo-sb" v-model="dist" min="1" max="100"></b-form-spinbutton>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-col class="col-sm-13 col-lg-3 mt-4">
                <b-button variant="success" @click="getMensaNearMe">Ok</b-button>
            </b-col>
        </b-row>
        <div v-if="mensaNearMe.length !== 0">
            <b-row>
                <b-col  v-for="mensa in mensaNearMe" :key="mensa.id" class="col-sm-13 col-lg-4">
                    <mensa :mensa="mensa[0]" :is-liked="false"></mensa>
                </b-col>
            </b-row>
        </div>
        <b-row v-else>
            <b-col>
                <b-alert show variant="danger" style="font-size: .5em">Keine Mensas neben Dir!</b-alert>
            </b-col>
        </b-row>
    </b-row>
</template>

<script>
import mensaService from "../service/mensaService";
import Mensa from "../components/Mensa";
export default {
    name: "MensaNearMe",
    components: {
        Mensa
    },
    data() {
        return {
            mensaNearMe: [],
            lat: '',
            lng: '',
            dist: 5
        }
    },
    mounted() {
         navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude
            this.lng = position.coords.longitude
             this.getMensaNearMe()
        });
    },
    methods: {
        getMensaNearMe() {
            mensaService.getMensaNearby(this.lat, this.lng, this.dist).then(response => {
                const mensaNearMeOpenApi = response.data
                mensaService.getMensas().then(response => {
                    const mensas = response.data
                    mensaNearMeOpenApi.forEach(mensa => {
                        this.mensaNearMe.push(mensas.filter(element => element.open_mensa_id === mensa.id ))
                    })
                }).catch(error => {
                    if(error.response.status === 401) {
                        localStorage.removeItem('token')
                        this.$router.push({name: 'Login'})
                    } else {
                        this.$bvModal.msgBoxOk('Error! Bitte versuchen Sie nochmal!')
                    }
                })
            }).catch(error => {
                if(error.response.status === 401) {
                    localStorage.removeItem('token')
                    this.$router.push({name: 'Login'})
                } else {
                    this.$bvModal.msgBoxOk('Error! Bitte versuchen Sie nochmal!')
                }
            })
        }
    }
}
</script>

<style scoped>
.mensa-near-me-body{
    background-color: rgb(88,131,109);

    font-size: 3vw;
    font-weight: bold;
    text-align: center;

}
</style>
