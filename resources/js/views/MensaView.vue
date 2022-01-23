<template>
    <div class="mensa-view-body">
        <p>Speißenkarte für <strong>{{mensa.name}}</strong></p>
        <div v-if="isClosed">
            <b-alert variant="warning" class="mt-3">{{mensa.name}} ist heute geschlossen!!!</b-alert>
        </div>
        <div v-else>
            <b-row>
                <b-col  v-for="meal in meals" :key="meal.id" class="col-4">
                    <meal :meal="meal" :mensaName="mensa.name"></meal>
                </b-col>
            </b-row>
        </div>
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
            mensa: ''
        }
    },
     mounted() {
        let date = format(new Date(), 'yyyy-MM-dd')

         mensaService.getMeals(30, '2022-01-05').then(response => {
             this.meals = response.data
         }).catch(error => {
             console.log(error)
         })

         mensaService.isMensaClosed(30, '2022-01-05').then(response => {
             this.isClosed = response.data.closed
         }).catch(error => {
             console.log(error)
         })

         mensaService.getMensa(this.mensaId).then(response => {
             this.mensa = response.data
         })
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
