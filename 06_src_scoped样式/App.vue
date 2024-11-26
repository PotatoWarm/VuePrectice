<template>
   <div>
      <Sightname/>
      <hr/>
      <Sightaddress/>
   </div>
</template>

<script>
import Sightname from "@/components/Sightname";
import Sightaddress from "@/components/Sightaddress";
export default {
  name: "App",
  components:{
    Sightname,
    Sightaddress,
  },
}
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .title{
     color: red;
   }
</style>


