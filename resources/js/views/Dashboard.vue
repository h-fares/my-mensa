<template>
    <div class="dashboard-body">
        <div v-if="!error">
            <p style="font-size: 2rem">Willkommen bei Deiner "MY MENSA" APP</p>
            <p style="font-size: 1.5rem">Deine lieblinges Mensas</p>
            <b-row class="liked-mensas">
                <b-col  v-for="mensa in likedMensas" :key="mensa.id" class="col-sm-13 col-lg-4">
                    <mensa :mensa="mensa" :is-liked=true ></mensa>
                </b-col>
            </b-row>
        </div>
        <b-row v-else>
            <b-col>
                <b-alert show variant="danger" style="font-size: .5em">Keine lieblings Mensas!</b-alert>
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
            likedMensas: [],
            error: false
        }
    },
    created() {
        userService.getUsersLikedMensa().then(response => {
            if(!response.data.length) this.error = true
            else this.likedMensas = response.data
        }).catch(error => {
            window.location.reload()
        })
    }
}
</script>

<style scoped>
.dashboard-body{
    background-color: rgb(88,131,109);

    font-size: 3vw;
    font-weight: bold;
    text-align: center;
}

</style>
