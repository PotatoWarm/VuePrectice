import { createApp } from 'vue';

import App from './App.vue';

createApp(App).mount('#app');

Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render: h => (App)
});