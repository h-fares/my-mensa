<template>
    <div>

        <b-button @click="getUser" variant="primary">get user</b-button>
        {{openMensa}}
        <b-alert variant="success" v-if="user">{{user.name}}</b-alert>
    </div>
</template>

<script>
import userService from "../service/userService";
import mensaService from "../service/mensaService";
export default {
    name: "Home",
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
