import Vue from 'vue';
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

const routes = [
    {
        name: 'Welcome',
        path: '/',
        component: Welcome
    }
];

const router = new Router({
    routes: routes
})

export default router