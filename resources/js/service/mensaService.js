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
    /**
     * Get all Mensas from mensa open api
     * @returns {Promise<AxiosResponse<any>>}
     */
    getOpenMensa() {
        return apiOpenMensa.get("/canteens");
    },
    /**
     * Save (initialize) mensas in DB
     * @param openMensa
     * @returns {Promise<AxiosResponse<any>>}
     */
    initMensa(openMensa) {
        return apiMensa.post("/mensa/init", {
            openMensa: openMensa
        });
    },
    /**
     * Get Meals of one mensa in certain day
     * @param mensaId
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    getMeals(mensaId, date) {
        return apiOpenMensa.get(`/canteens/${mensaId}/days/${date}/meals`)
    },
    /**
     * Check if Mensa closed
     * @param mensaId
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    isMensaClosed(mensaId, date) {
        return apiOpenMensa.get(`/canteens/${mensaId}/days/${date}`)
    },
    /**
     * Get near me Mensa
     * @param lat
     * @param lng
     * @param dist
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getMensaNearby(lat, lng, dist) {
        return apiOpenMensa.get(`/canteens/?near[lat]=${lat}&near[lng]=${lng}&near[dist]=${dist}`)
    },
    /**
     *  Get saved mensas in DB
     * @returns {Promise<AxiosResponse<any>>}
     */
    getMensas() {
        return apiMensa.get("/mensa");
    },
    /**
     * Get one mensa from DB
     * @param mensaId
     * @returns {Promise<AxiosResponse<any>>}
     */
    getMensa(mensaId) {
        return apiOpenMensa.get(`/canteens/${mensaId}`)
    },
    /**
     * Set mensa as liked mensa
     * @param mensaId
     * @returns {Promise<AxiosResponse<any>>}
     */
    setLikedMensa(mensaId) {
        return apiMensa.post(`/mensa/${mensaId}/liked`)
    },
    /**
     * Set Mensa as not liked Mensa
     * @param mensaId
     * @returns {Promise<AxiosResponse<any>>}
     */
    setNotLikedMensa(mensaId) {
        return apiMensa.delete(`/mensa/${mensaId}/notLiked`)
    },
    /**
     * Get all not liked mensa for one user
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUserNotLikedMensas() {
        return apiMensa.get("/mensa/notLiked");
    }
};
