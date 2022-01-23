<template>
    <div class="user">
        <b-card
            :title="user.name"
            tag="article"
            style="max-width: 20rem; height: 200px; font-size: .4vw;"

            class="mb-2"
        >
            <b-card-text style="font-size: .7vw;">
            </b-card-text>
        </b-card>
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
