<template>
    <div class="">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import userService from "../service/userService";
import mensaService from "../service/mensaService";
import NavBar from "../components/NavBar";
export default {
    name: "Home",
    components: {NavBar},
    mounted(){
        mensaService.getMensas().then(response => {
            if(response.data.length === 0) {
                mensaService.getOpenMensa().then(response => {
                    mensaService.initMensa(response.data)
                })

            }
        })
    },
    data() {
        return {
            openMensa: []
        }
    }
}
</script>

<style scoped>

</style>
