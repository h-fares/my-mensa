import axios from "axios";
const apiAuth = axios.create({
    baseURL: "http://127.0.0.1:8000/api/auth",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});


export default {
    login(body) {
        return apiAuth.post("/login", body);
    },
    register(body) {
        return apiAuth.post("/register", body);
    },
    async logout() {
        await apiAuth.post("/logout", null, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
        });
        localStorage.removeItem('token')
    }
};
