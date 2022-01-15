<template>
    <div class="container-fluid d-flex justify-content-center mt-3">
        <b-card
            title="Regestrieren"
            img-src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/20126b38115863.57566eb03b5e1.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
        >
            <b-form >
                <b-form-group
                    id="name"
                    label="Name: "
                    label-for="name"
                    description="Geben Sie Ihrem Name ein!"
                >
                    <b-form-input
                        id="name"
                        v-model="registerForm.name"
                        type="text"
                        placeholder="Name eingeben!"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="email"
                    label="Email Adresse:"
                    label-for="email"
                    description="Geben Sie Ihre Email Adresse ein!"
                >
                    <b-form-input
                        id="email"
                        v-model="registerForm.email"
                        type="email"
                        placeholder="Email eingeben!"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="password" label="Passwort:" label-for="password">
                    <b-form-input
                        id="password"
                        v-model="registerForm.password"
                        placeholder="Password eingeben!"
                        required
                        type="password"
                    ></b-form-input>
                    <b-form-input
                        id="passwordConf"
                        v-model="registerForm.passwordConfirmation"
                        placeholder="Passwort wiederholen!"
                        required
                        type="password"
                        class="mt-2"
                    ></b-form-input>
                </b-form-group>
            </b-form>
            <b-button @click="register" variant="primary" class="mt-3">Register</b-button>
        </b-card>
    </div>
</template>

<script>
import authService from "../service/authService";
import router from "../route/router";

export default {
    name: "RegisterForm",
    data() {
        return {
            registerForm: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            }
        }
    },
    methods: {
        register() {
            authService.register(this.registerForm).then(response => {
                authService.login(this.registerForm).then(response => {
                    localStorage.setItem('token', response.data.access_token)
                    this.$router.push({ path: 'dashboard' })
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>
