require('./bootstrap');
import Vue from 'vue'
import router from './route/router'
import Index from './Index'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


window.Vue = require('vue').default;
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


Vue.component('index', Index);
Vue.router = router;
const app = new Vue({
    el: '#app',
    router
});
