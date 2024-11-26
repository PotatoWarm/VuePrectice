<template>
   <div class="demo">
     <h2 class="title">风景名称:{{  name }}</h2>
     <h2>风景地址: {{ address }}</h2>
   </div>
</template>

<script>

export default {
  name: "Sightname",
  data(){
    console.log(this);
    return {
       name: '黄鹤楼',
       address: '武汉',
    }
  },
}
</script>

<style scoped>
  .demo{
    background: orange;
  }
</style>
