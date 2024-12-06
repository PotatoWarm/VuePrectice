//引入vue
import Vue from "vue";

import App from './App';

Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        //事件总线
        Vue.prototype.$bus = this;
    }
});