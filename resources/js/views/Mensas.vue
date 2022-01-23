<template>
    <div class="mensa-body">
        <p>Alle Mensas</p>
        <b-row>
            <b-col  v-for="mensa in mensas" :key="mensa.id" class="col-4">
                <mensa :mensa="mensa" :is-liked="false"></mensa>
            </b-col>
        </b-row>
    </div>
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
            mensas: []
        }
    },
    mounted() {
        mensaService.getUserNotLikedMensas().then(response => {
            this.mensas = response.data
        })
    }
}
</script>

<style scoped>

.mensa-body{
    background-color: rgb(88,131,109);

    font-size: 3vw;
    font-weight: bold;
    text-align: center;

}
</style>
