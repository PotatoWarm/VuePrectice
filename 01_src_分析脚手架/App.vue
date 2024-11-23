<template>
   <div>
     <img src="./assets/favicon.png" alt="logo">
     <Sightname></Sightname>
     <Sightaddress></Sightaddress>
   </div>
</template>

<script>
import Sightname from '@/components/Sightname.vue';
import Sightaddress from '@/components/Sightaddress.vue';
//默认暴露  @代表src目录
export default {
  name: "App",
  //汇总所有的组件
  components:{
    Sightname,
    Sightaddress
  }
}
</script>