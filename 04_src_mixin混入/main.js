import Vue from 'vue';
import App from './App.vue';
// import { mixin, shareDate } from './mixin';

// 关闭Vue生产提示
Vue.config.productionTip = false;
//全局混入
// Vue.mixin(mixin);
// Vue.mixin(shareDate);

new Vue({
    render: h => h(App),
}).$mount('#app')