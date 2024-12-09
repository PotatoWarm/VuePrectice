//引入Vue
import Vue from "vue";
//引入vue-resource
import vueResource from 'vue-resource';
//引入App
import App from "./App.vue";

//关闭vue的生产提示
Vue.config.productionTip = false;

Vue.use(vueResource);//使用vueResource插件来发送请求

Vue.prototype.$bus = new Vue();

Vue
new Vue({
    render: h => h(App),
  }).$mount('#app');