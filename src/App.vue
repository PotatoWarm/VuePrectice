<template>
   <div>
     <h1 v-text="msg" ref="title" :class="{'animate':isAnimate}"></h1>
     
     <button @click="showH">点我输出上方的dom元素</button>
     <Sightname ref="sch"/>

   </div>
</template>

<script>


import Sightname from "./components/Sightname.vue";



export default {
  data(){
    return {
      msg: '欢迎学习Vue',
      isAnimate: false
    }
  },
  methods:{
    showH(e){
      this.isAnimate = true;
      console.log(this.$refs.title); //this ==> vc(app组件)
      console.log(e.target); //发生事件的dom元素m
      console.log(this.$refs.sch); //可以是school组件加refs属性 获得的是组件事例对象vc

      setTimeout(() => {
        this.isAnimate = false;
      }, 2000);
    }
  },
  mounted(){
    console.log('App组件挂载完毕');
  },

  components:{
    Sightname,
  },



}
</script>

<style>
  .animate{
    animation: move 2s linear infinite;
  }
  @keyframes move{
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0px);
    }
  }
</style>

