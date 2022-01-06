import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "../views/Home";
import Login from "../views/Login";
import Mensas from "../views/Mensas";
import Dashboard from "../views/Dashboard";
import UserProfile from "../views/UserProfile";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/mensa',
                name: 'Mensa',
                component: Mensas
            },
            {
                path: '/userProfile',
                name: 'UserProfile',
                component: UserProfile
            }
        ]
    },
]


const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) =>{
    if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
    else next()
})
export default router
