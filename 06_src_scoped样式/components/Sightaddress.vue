<template>
   <div class="demo">
     <h2>风景名称:{{ name }}</h2>
     <h2>风景地址: {{ address }}</h2>
   </div>
</template>

<script>
export default {
  name: "Sightaddress",
  data(){
    console.log(this);
    return {
       name: '黄鹤楼',
       address: '武汉'
    }
  },
}
</script>

<style scoped>
   /*scoped代表局部的,样式只在本组件中生效*/
  .demo{
    background: skyblue;
  }
</style>


