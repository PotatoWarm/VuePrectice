import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
}).$mount('#app')
// 挂载app实例

