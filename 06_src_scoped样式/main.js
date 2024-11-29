//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

//关闭Vue生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
