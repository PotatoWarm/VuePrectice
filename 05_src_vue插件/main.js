//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//引入插件
import plugins from './plugins';

//关闭Vue生产提示
Vue.config.productionTip = false;

//使用插件
Vue.use(plugins);//vue应用插件

//创建vm
new Vue({
    render: h => h(App),
}).$mount('#app');