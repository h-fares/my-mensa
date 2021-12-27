<template>
    <div>
        <b-form>
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                    type="password"
                ></b-form-input>
            </b-form-group>
        </b-form>
        <b-button @click="login" variant="primary">Submit</b-button>
        <b-button v-if="!isRegister" @click="isRegister = true" variant="primary">Register</b-button>

        <div v-if="isRegister">
            <b-form >
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-name"
                        v-model="registerForm.name"
                        type="email"
                        placeholder="Enter name"
                        required
                    ></b-form-input>
                    <b-form-input
                        id="input-1"
                        v-model="registerForm.email"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="registerForm.password"
                        placeholder="Enter password"
                        required
                        type="password"
                    ></b-form-input>
                    <b-form-input
                        id="input-2"
                        v-model="registerForm.passwordConfirmation"
                        placeholder="Renter password"
                        required
                        type="password"
                    ></b-form-input>
                </b-form-group>
            </b-form>
            <b-button @click="register" variant="primary">Register</b-button>
        </div>
    </div>
</template>

<script>
import authService from "../service/authService";
import router from "../route/router";
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            isRegister: false,
            registerForm: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            }
        }
    },
    methods: {
        login() {
            authService.login(this.form).then(response => {
                localStorage.setItem('token', response.data.access_token)
                router.push('/')
            }).catch(error => {
                console.log(error)
            })
        },
        register() {
            authService.register(this.registerForm).then(response => {
                router.push('/')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>
