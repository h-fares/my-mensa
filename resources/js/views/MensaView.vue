<template>
    <div class="mensa-view-body">
        <div v-if="!error">
            <p style="font-size: 2rem">Speißenkarte für <strong>{{mensa.name}}</strong></p>
            <b-row class="justify-content-md-center">
                <b-col class="col-sm-12 col-lg-3">
                    <label for="mensa-datum" style="font-size: 1rem">Geben Sie Datum ein!</label>
                    <b-form-datepicker id="mensa-datum" v-model="date" class="mb-2"></b-form-datepicker>
                </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
                <b-col class="col-3">
                    <b-button variant="success" @click="getMeals">Ok</b-button>
                </b-col>
            </b-row>
            <div v-if="isClosed">
                <b-alert variant="warning" class="mt-3" show>{{mensa.name}} ist heute geschlossen!!!</b-alert>
            </div>
            <div v-else>
                <b-row>
                    <b-col  v-for="meal in meals" :key="meal.id"  class="col-sm-12 col-lg-4">
                        <meal :meal="meal" :mensaName="mensa.name"></meal>
                    </b-col>
                </b-row>
            </div>
        </div>
        <b-row v-else>
            <b-col>
                <b-alert show variant="danger" style="font-size: .5em">Keine Mensas! Bitte versuchen Sie nochmal</b-alert>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import mensaService from "../service/mensaService";
import Meal from "../components/Meal";
import { format } from 'date-fns'
export default {
    name: "MensaView",
    props: ['mensaId'],
    components: {
        Meal
    },
    data() {
        return {
            meals: [],
            isClosed: false,
            mensa: '',
            date: '',
            error: false
        }
    },
     mounted() {

         //const latitude  = position.coords.latitude;
        this.date = format(new Date(), 'yyyy-MM-dd')
        this.getMeals()

    },
    methods: {
        getMeals() {
            mensaService.getMeals(this.mensaId, this.date).then(response => {
                this.meals = response.data
            }).catch(error => {
                if(error.response.status === 401) {
                    localStorage.removeItem('token')
                    this.$router.push({name: 'Login'})
                } else {
                    this.$bvModal.msgBoxOk('Fehler von Mensa Open API! Bitte versuchen Sie nochmal')
                }
            })

            mensaService.isMensaClosed(this.mensaId, this.date).then(response => {
                this.isClosed = response.data.closed
            }).catch(error => {
                if(error.response.status === 401) {
                    localStorage.removeItem('token')
                    this.$router.push({name: 'Login'})
                } else {
                    this.$bvModal.msgBoxOk('Fehler von Mensa Open API! Bitte versuchen Sie nochmal')
                }
            })

            mensaService.getMensa(this.mensaId).then(response => {
                this.mensa = response.data
            }).catch(error => {
                if(error.response.status === 401) {
                    localStorage.removeItem('token')
                    this.$router.push({name: 'Login'})
                } else {
                    this.$bvModal.msgBoxOk('Fehler von Mensa Open API! Bitte versuchen Sie nochmal')
                }
            })
        }
    }
}
</script>

<style scoped>
.mensa-view-body{
    background-color: rgb(88,131,109);

    font-size: 3vw;
    font-weight: bold;
    text-align: center;

}
</style>
