import Vue from 'vue';
import App from './App.vue';
import Main from '@v/Main';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(Main),
}).$mount('#app');
