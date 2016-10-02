import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';

Vue.use(VueRouter);

if (__DEV__) {
    window.Vue = Vue;
}

Vue.config.debug = true;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
        path: '/',
        name: 'home.index',
        component: require('./views/sample') 
    },
    {
        path: '*',
        redirect: '/',
    }
  ]
});

new Vue({
    router,
    template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `,
    mounted() {
    console.log('mounted');  
    }
}).$mount('#app');
