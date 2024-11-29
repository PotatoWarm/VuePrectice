<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出DOM元素</button>
    <Sightaddress ref="Sightaddress"></Sightaddress>
  </div>
</template>

<script>
import Sightaddress from './components/Sightaddress.vue'; 

export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎来到橘子洲头',
    }
  },
  methods: {
    showDOM(e) {
      console.log('标题元素:', this.$refs.title);
      console.log('点击的按钮:', e.target);
      console.log('子组件:', this.$refs.Sightaddress);
    }
  },
  components: { 
    Sightaddress,
  }, 
} 
</script>

