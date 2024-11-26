<template>
   <div >
     <h2>风景名胜:{{  name | mySlice }}</h2>
     <h2>地址: {{ address }}</h2>
     <button @click="test">点我测试一下hello</button>
   </div>
</template>

<script>
export default {
  name: "Sightaddress",
  data(){
    console.log(this);
    return {
       name: '橘子洲头',
       address: '长沙'
    }
  },
  methods:{
    test(){
      this.hello();
    }
  }
}
</script>

