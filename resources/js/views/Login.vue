<template>
    <div class="col d-flex justify-content-center login-body">
        <b-tabs style="font-size: 1rem" pills card content-class="mt-3">
            <b-tab title="Einloggen" active>
                <login-form></login-form>
            </b-tab>
            <b-tab title="Regestrieren">
                <register-form></register-form>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
export default {
    components: {RegisterForm, LoginForm},
}
</script>

<style scoped>
.login-body{
    background-color: rgb(88,131,109);

    font-size: .9vw;
    font-weight: bold;
    text-align: center;
}

</style>
