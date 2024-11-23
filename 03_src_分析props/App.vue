<template>

   <div>
      <!---多个vc互不影响-->
      <!--v-bind的作用重要 获取后面表达式值的赋给props的属性-->
      <Sightname name="玲玲" sex="女" :age='25'/>
      <hr/>
   </div>


</template>

<script>
import Sightname from "@/components/Sightname";

export default {
  name: "App",
  components:{
    Sightname,
  },
}
</script>
