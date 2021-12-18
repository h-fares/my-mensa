require('./bootstrap');
import Vue from 'vue'
import router from './route/router'
import Index from './Index'

window.Vue = require('vue').default;


Vue.component('index', Index);
Vue.router = router;
const app = new Vue({
    el: '#app',
    router
});
