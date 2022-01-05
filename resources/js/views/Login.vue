<template>
<!--    <div>
        <login-form></login-form>

    </div>-->

    <div class="container-fluid col d-flex justify-content-center mt-3">
        <b-tabs content-class="mt-3">
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

</style>
