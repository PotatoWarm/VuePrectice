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
   .demo{
     background: aqua;
   }
</style>
