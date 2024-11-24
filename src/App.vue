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
    Sightaddress,
    Sightname,
  },
}
</script>

