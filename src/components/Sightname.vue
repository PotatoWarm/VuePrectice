<template>
   <div >
     <h2>姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
     <input v-fbind:value="name"/>
   </div>
</template>

<script>

export default {
  name: "Sightname",
  data(){
    console.log(this);
    return {    
       name: '玲玲',
       sex: '女',
    }
  },
}
</script>

