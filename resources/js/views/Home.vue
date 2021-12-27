<template>
    <div>
        <b-alert variant="success" v-if="user">{{user.name}}</b-alert>
        <b-button @click="getUser" variant="primary">get user</b-button>
    </div>
</template>

<script>
import userService from "../service/userService";
export default {
    name: "Home",
    methods: {
        getUser() {
            userService.getUser().then(response => {
                this.user = response.data
            })
        }
    },
    data() {
        return {
            user: ''
        }
    }
}
</script>

<style scoped>

</style>
