<template>
   <div >
     <h2 @click="showName">旅客:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
   </div>
</template>

<script>
import {  mixin,  shareData } from "@/mixin";
//@/mixin 是混合, 意思就是引入混合 ！！！！！！！！！
export default {
  name: "Sightname",
  data(){
    console.log(this);
    return {
       name: '玲玲',
       sex: '女',
       x:666 
       //如果混合中配置了与data(或者配置了相同的methods)相同的属性值，
       //则以你的配置的属性为主(而不以mixin为主)
    }
  },
  mounted() {
    console.log('你好啊啊！！！！恭喜你成功了！')
    // 打开开发者工具查看，选择“console”(控制台)标签
     //但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
  },
  mixins:[ mixin, shareData ]
}
</script>

