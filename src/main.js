//引入Vue
import Vue from 'vue';

//引入App
import App from './App.vue';

//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    //注册App组件   
    render: (h) => h(App),
    //注册事件总线
    beforeCreate() {
        //将Vue实例对象挂载到原型上
        Vue.prototype.$bus = this;
        
    },
});
