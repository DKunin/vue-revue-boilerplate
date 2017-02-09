import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import styles from './styles/index.css';

[ VueRouter ].map(singleItem => Vue.use(singleItem));

if (__DEV__) {
    window.Vue = Vue;
    Vue.config.debug = true;
}

export const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: require('./views/first.vue') },
        { path: '/secondary', component: require('./views/secondary.vue') }
    ]
});

new Vue({ router, ...App }).$mount('#app');
