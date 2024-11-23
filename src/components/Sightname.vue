<template>
   <div class="demo">
     <h1>景点名称:{{ name }}</h1>
     <h1>景点地址: {{  address }}</h1>
   </div>
</template>

<script>
export default {
  name: "Sightname",
  data(){
    return {
      address: '长沙',
      name: '橘子洲头'
    }
  }
}
</script>
<style scoped lang="less" >
/* scoped 表示当前样式只在当前组件中生效  lang="less" 表示使用less语法 less是css的预处理语言*/
   .demo{
     background: aqua;
   }
</style>
