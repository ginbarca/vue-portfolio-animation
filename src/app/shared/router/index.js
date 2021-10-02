import Vue from 'vue';
import Router from 'vue-router';

import {homeRoutes} from '~/home';

Vue.use(Router);

const appRoutes = [
    {
        path: '/',
        redirect: '/home'
    },
];

const routes = [...homeRoutes, ...appRoutes];

export default new Router({
    mode: 'hash',
    routes
});
