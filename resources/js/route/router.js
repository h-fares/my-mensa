import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "../views/Home";

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
    }
]


const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router
