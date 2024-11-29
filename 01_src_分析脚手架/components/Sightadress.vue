<template>
  <div>
    <h2>旅客姓名：{{ Passenger }}</h2>
    <h2>旅客年龄：{{ age }}</h2>
    <button @click="showPassenger">点我提示旅客信息</button>
  </div>
</template>

<script>
export default {
  data() {
  return {
    Passenger: 'lingling',
    age: 21
  }
  },
  methods: {
    showPassenger() {
    alert(this.Passenger)
      alert(this.age)
    }
  }
};
</script>
