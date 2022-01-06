<template>
    <div class="container-fluid col d-flex justify-content-center mt-3">
        <b-card
            title="Einloggen"
            img-src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/20126b38115863.57566eb03b5e1.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
        >
            <b-form>
                <b-form-group
                    id="email"
                    label="Email Adresse:"
                    label-for="email"
                    description="Geben Sie Ihre Email Adresse ein!"
                >
                    <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="example@example.de"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="password" label="Passwort: " label-for="password">
                    <b-form-input
                        id="password"
                        v-model="form.password"
                        required
                        type="password"
                    ></b-form-input>
                </b-form-group>
            </b-form>
            <b-button @click="login" variant="primary" class="mt-3">Einloggen</b-button>
        </b-card>
    </div>
</template>

<script>
import authService from "../service/authService";
export default {
    name: "LoginForm",
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
        }
    },
    methods: {
        async login() {
            await authService.login(this.form).then(response => {
                localStorage.setItem('token', response.data.access_token)
                this.$router.push({ path: 'dashboard' })
            }).catch(error => {
                console.log(error)
            })

        },
    }
}
</script>

<style scoped>

</style>
