<template>
  <div class="demo">
    <h2>乘客姓名：{{ Passenger }}</h2>
    <h2>风景地址：{{ address }}</h2>
    <button @click="showName">点我提示乘客姓名</button>
  </div>
</template>

<script>
//组件交互的代码
//export default:school分别暴露
export default {
  Passenger: 'Passenger',
  data() {
    return {
      passenger: 'lingling',//开发者工具最终呈现的名字为：passenger
      address: 'changsha'
    }
  },
  methods: {
    showName() {
      alert(this.passenger)
      alert(this.address)
    }
  }
};
</script>

<style>
.demo {
  background-color: deeppink;
}
</style>
