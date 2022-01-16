import axios from "axios";
const token = localStorage.getItem('token')
const apiMensa = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});

const apiOpenMensa = axios.create({
    baseURL: "https://openmensa.org/api/v2",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default {
    getOpenMensa() {
        return apiOpenMensa.get("/canteens");
    },
    initMensa(openMensa) {
        return apiMensa.post("/mensa/init", {
            openMensa: openMensa
        });
    },
    getMensas() {
        return apiMensa.get("/mensa");
    },
    getMeals(mensaId, date) {
        return apiOpenMensa.get(`/canteens/${mensaId}/days/${date}/meals`)
    },
    isMensaClosed(mensaId, date) {
        return apiOpenMensa.get(`/canteens/${mensaId}/days/${date}`)
    },
    getMensa(mensaId) {
        return apiOpenMensa.get(`/canteens/${mensaId}`)
    },
    setLikedMensa(mensaId) {
        return apiMensa.post(`/mensa/${mensaId}/liked`)
    }
};
