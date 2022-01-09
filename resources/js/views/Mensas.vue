<template>
    <div class="container">
        <b-row>
            <b-col  v-for="mensa in mensas" :key="mensa.id" class="col-4">
                <mensa :mensa="mensa"></mensa>
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
        mensaService.getMensas().then(response => {
            this.mensas = response.data
        })
    }
}
</script>

<style scoped>

</style>
