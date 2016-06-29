import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';

Vue.use(VueRouter);
if (__DEV__) {
    window.Vue = Vue;
}

Vue.config.debug = true;

export const router = new VueRouter();
router.map({
    '/': {
        component: require('./views/sample')
    }
});

router.redirect({
    '*': '/'
});

router.start(App, '#app');
