// 引入vue
import Vue from 'vue';
// 引入App组件
import App from './App.vue';

// 引入mixin
// import {mixin,shareDate} from '@/mixin';

// 关闭Vue生产提示
Vue.config.productionTip = false;
//全局混合
// Vue.mixin(mixin);
// Vue.mixin(shareDate);
new Vue({
    render: h => h(App),
}).$mount('#app')
// 挂载app实例


