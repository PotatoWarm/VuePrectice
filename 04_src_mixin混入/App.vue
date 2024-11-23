<template>

   <div>
    <!--使用组件-->
      <Sightname />
      <hr/>
     <Sightaddress/>
   </div>
</template>

<script>
//引入组件
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

