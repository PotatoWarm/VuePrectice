import Vue from 'vue'; // 导入 Vue
import App from './App.vue'; // 导入你的根组件
import store from './store'; // 导入 Vuex 存储

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 创建 Vue 实例并挂载
new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
