//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
//引入store
import store from "./store";
//引入插件
import VueResource from "vue-resource";
//引入vuex
import Vuex from 'vuex'

//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuex);

//创建vm
new Vue({
    el:"#app",
    store,
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    }

});