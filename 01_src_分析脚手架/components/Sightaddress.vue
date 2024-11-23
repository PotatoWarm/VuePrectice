<template>
<!--  组件的交互-->
<div class="demo1">
     <h2>风景名称:{{ name }}</h2>
     <h2>风景地址:{{ address }}</h2>
     <button @click="showName">点我提示风景名</button>
   </div>
</template>

<style>
  /*css样式*/
  .demo1{
    background: rgb(16, 93, 124);
  }
  
</style>


<script>
  //组件交互的代码
  //export default school分别暴露
  export default {
    name: 'Sightaddress', //开发者工具最终呈现的名字为School
    data(){
      return {
        name:'lingling在长沙',
        address:'长沙'
      }
    },
    methods:{ 
      showName(){
        alert(this.name);
      }
    }
  };

  //统一暴露
  // export { school };
  // export default school //默认暴露
</script>
