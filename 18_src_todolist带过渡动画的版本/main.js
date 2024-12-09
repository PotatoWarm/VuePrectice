//引入vue
import Vue from "vue";
//引入App
import App from './App.vue';

//关闭vue生产提示
Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        //事件总线
        Vue.prototype.$bus = this;
    }
});
