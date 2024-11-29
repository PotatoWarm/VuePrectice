import Vue from 'vue'
//这里引入的是残缺的vue，
//是没有模板解析器是不能写template的vue.runtime.esm.js
import App from './App.vue'
//import Vue from 'vue/dist/vue';
//这里引入的是完整的vue，是有模板解析器的vue.runtime.esm.js

Vue.config.productionTip = false;
/*
                          关于不同版本的Vue：
        1.vue.js与vue.runtime.esm.js的区别：
                （1）vue.js是完整版的Vue，包含：核心功能+模板解析器
                （2）vue.runtime.XXX.js是运行版的Vue，只包含：核心功能，没有模板解析器

        2.因为vue.runtime.XXX.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容

*/
new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
