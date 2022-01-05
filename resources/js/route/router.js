import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "../views/Home";
import Login from "../views/Login";
import Mensa from "../views/Mensa";
import LikedMensa from "../views/LikedMensa";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        props:true,
        meta: {
            allow: true,
            title: 'Login',
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        props:true,
        meta: {
            allow: true,
            title: 'Home',
        }
    },
    {
        path: '/mensa',
        name: 'Mensa',
        component: Mensa,
        props:true,
        meta: {
            allow: true,
            title: 'Home',
        }
    },
    {
        path: '/likedMensa',
        name: 'LikedMensa',
        component: LikedMensa,
        props:true,
        meta: {
            allow: true,
            title: 'Home',
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
