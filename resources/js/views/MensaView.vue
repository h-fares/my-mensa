<template>
    <div >
        <div v-if="isClosed">
            <b-alert variant="warning" show class="mt-3">Mensa {{}} ist heute geschlossen!!!</b-alert>
        </div>
    </div>
</template>

<script>
import mensaService from "../service/mensaService";
import { format } from 'date-fns'
export default {
    name: "MensaView",
    props: ['mensaId'],
    data() {
        return {
            meals: [],
            isClosed: false
        }
    },
     mounted() {
        let date = format(new Date(), 'yyyy-MM-dd')

         mensaService.getMeals(30, '2022-01-05').then(response => {
             this.meals = response.data
         }).catch(error => {
             console.log(error)
         })

         mensaService.isMensaClosed(30, date).then(response => {
             this.isClosed = response.data.closed
         }).catch(error => {
             console.log(error)
         })
    }
}
</script>

<style scoped>

</style>
