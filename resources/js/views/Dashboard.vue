<template>
    <div >
        <div class="dashboard-body">
            <p>Willkommen bei Deiner "MY MENSA" APP</p>
            <p>Deine lieblinges Mensas</p>
            <b-row class="liked-mensas">
                <b-col  v-for="mensa in likedMensas" :key="mensa.id" class="col-4">
                    <mensa :mensa="mensa" :is-liked=true ></mensa>
                </b-col>
            </b-row>
        </div>

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
    created() {
        userService.getUsersLikedMensa().then(response => {
            this.likedMensas = response.data
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
