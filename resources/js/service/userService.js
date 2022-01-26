import axios from "axios";
const token = localStorage.getItem('token')
const apiUser = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});

export default {
    /**
     * Get user
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUser() {
        return apiUser.get("/user");
    },
    /**
     * Get all user's liked mensas
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUsersLikedMensa() {
        return apiUser.get("/user/mensas");
    }
};
