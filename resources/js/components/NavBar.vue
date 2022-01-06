<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="secondary" class="container-fluid">
            <b-navbar-brand :to="{name: 'Dashboard'}">Dashboard</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-brand :to="{name: 'Mensa'}">Mensa</b-navbar-brand>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item :to="{name: 'UserProfile'}">Profile</b-dropdown-item>
                        <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
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

</style>
