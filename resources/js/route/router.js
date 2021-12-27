import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "../views/Home";
import Login from "../views/Login";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        props:true,
        meta: {
            allow: true,
            title: 'Home',
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        props:true,
        meta: {
            allow: true,
            title: 'Login',
        }
    }
]


const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});
const authToken = localStorage.getItem('token');
router.beforeEach((to, from, next) =>{
    if (to.name !== 'Login' && !authToken) next({ name: 'Login' })
    else next()
})
export default router
