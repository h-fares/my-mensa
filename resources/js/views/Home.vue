<template>
    <div class="container-fluid">
        <nav-bar></nav-bar>
        <router-view></router-view>
<!--        <b-button @click="getUser" variant="primary">get user</b-button>
        {{openMensa}}
        <b-alert variant="success" v-if="user">{{user.name}}</b-alert>-->
    </div>
</template>

<script>
import userService from "../service/userService";
import mensaService from "../service/mensaService";
import NavBar from "../components/NavBar";
export default {
    name: "Home",
    components: {NavBar},
    methods: {
        getUser() {
            userService.getUser().then(response => {
                this.user = response.data
            })
        },
        async getOpenMensa() {
            await mensaService.getOpenMensa().then(response => {
                this.openMensa = response.data.filter(mensa => {
                    if(mensa.city === "Potsdam" || mensa.city === "Berlin") return mensa
                })
            })
            await mensaService.initMensa(this.openMensa)
        }
    },
    data() {
        return {
            user: '',
            openMensa: []
        }
    }
}
</script>

<style scoped>

</style>
