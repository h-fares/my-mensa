<template>
    <div class="user">
        <h3>Hallo {{user.name}}</h3>
        <h3>Email: {{user.email}}</h3>
    </div>
</template>

<script>
import userService from "../service/userService";
export default {
    name: "UserProfile",
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        userService.getUser().then(response => {
            this.user = response.data
        }).catch(error => {
            if(error.response.status === 401) {
                localStorage.removeItem('token')
                this.$router.push({name: 'Login'})
            } else {
                this.$bvModal.msgBoxOk('Fehler! Bitte versuchen Sie nochmal')
            }
        })
    }
}
</script>

<style scoped>
.user {
    background-color: rgb(88,131,109);

    font-size: 3vw;
    font-weight: bold;
    text-align: center;
}

</style>
