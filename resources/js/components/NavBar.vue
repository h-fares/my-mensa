<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success" class="container-fluid nav-container">
            <b-navbar-brand :to="{name: 'Dashboard'}">Dashboard</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-brand :to="{name: 'Mensas'}">Mensa</b-navbar-brand>
                <b-navbar-brand :to="{name: 'UserProfile'}">Profile</b-navbar-brand>
                <b-navbar-brand  @click="logout" style="cursor: pointer">Ausloggen</b-navbar-brand>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import authService from "../service/authService";
export default {
    name: "NavBar",
    methods: {
        async logout() {
            await authService.logout()
            await this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style scoped>
.nav-container {
    background-color: rgb(88,131,109);
    filter: grayscale(0.5) opacity(0.85)
}
</style>
