//引入Vue
import Vue from 'vue';


//引入App
import App from './App.vue';


// 创建事件总线
Vue.prototype.$bus = new Vue()

const vm = new Vue({  // 正确创建 Vue 实例
  render: h => h(App)
}).$mount('#app')


