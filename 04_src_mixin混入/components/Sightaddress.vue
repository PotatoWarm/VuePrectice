<template>
   <div >
     <h2 @click="showName">景点名称:{{  name }}</h2>
     <h2>景点地址: {{ address }}</h2>
   </div>
</template>

<script>
//引入混合
import {  mixin, shareData } from "@/mixin";
//@/mixin 是混合, 意思就是引入混合 ！！！！！！！！！
export default {
  name: "Sightaddress",
  data(){
    console.log(this);
    return {
       name: '橘子洲头',
       address: '长沙'
    }
  },
  mixins:[ mixin, shareData ]
}
</script>

