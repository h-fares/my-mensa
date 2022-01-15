<template>
    <div class="container">
        <b-row>
            <b-col  v-for="mensa in likedMensas" :key="mensa.id" class="col-4">
                <mensa :mensa="mensa"></mensa>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import userService from "../service/userService";
import Mensa from "../components/Mensa";
export default {
    name: "Dashboard",
    components: {
        Mensa
    },
    data() {
        return {
            likedMensas: []
        }
    },
    mounted() {
        userService.getUsersLikedMensa().then(response => {
            this.likedMensas = response.data
        })
    }
}
</script>

<style scoped>

</style>
