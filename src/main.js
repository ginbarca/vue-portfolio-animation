import Vue from 'vue';

import i18n from "@shared/locale/index";

import App from '~/app.vue';

import './main.scss';

import router from '@shared/router';
import store from '@shared/store';

import Scrollspy from 'vue2-scrollspy';
import BootstrapVue from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'
import VueParticles from 'vue-particles'
import VueTypedJs from 'vue-typed-js'

const VueScrollTo = require('vue-scrollto');

Vue.use(VueParticles)
Vue.use(VueYoutube)
Vue.use(VueScrollTo)
Vue.use(VueTypedJs)

Vue.use(BootstrapVue);

Vue.use(Scrollspy);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
