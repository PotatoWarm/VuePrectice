import { createApp } from 'vue';

//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入store
import store from "./store";

//关闭Vue的生产提示
Vue.config.productionTip = false;

createApp(App).use(store).mount('#app');

new Vue({
    el:'#app',
    store,
    render: h => h(App),
})