<template>
    <b-row class="mensa-near-me-body">
        <p>Alle Mensas neben Dir!</p>
        <b-row class="justify-content-md-center">
            <b-col class="col-3">
                <label for="demo-sb" style="font-size: 1vw">Distanz</label>
                <b-form-spinbutton id="demo-sb" v-model="dist" min="1" max="100"></b-form-spinbutton>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-col class="col-3">
                <b-button variant="success" @click="getMensaNearMe">Ok</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col  v-for="mensa in mensaNearMe" :key="mensa.id" class="col-4">
                <mensa :mensa="mensa" :is-liked="false"></mensa>
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
        });
        this.getMensaNearMe()
    },
    methods: {
        getMensaNearMe() {
            mensaService.getMensaNearby(this.lat, this.lng, this.dist).then(response => {
                this.mensaNearMe = response.data
            }).catch(error => {
                console.log(error)
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
