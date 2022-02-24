import Vue from 'vue';
// import App from './App.vue';
import Main from '@v/Main';
import router from './router';

Vue.config.productionTip = false;

//可以在项目入口处输出
console.log(process.env.NODE_ENV);

new Vue({
    router,
    render: (h) => h(Main),
}).$mount('#app');
