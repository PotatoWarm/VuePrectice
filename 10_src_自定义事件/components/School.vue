<template>
   <div class="demo">
     <h2>学校名称:{{  name }}</h2>
     <h2>学校地址: {{ address }}</h2>
     <button @click="sendSchoolName">把学校名传递给app</button>
   </div>
</template>

<script>
export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'changsha university',
       address: '长沙理工大学'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name);
    }
  },
  props: ['getSchoolName'],
}
</script>

<style scoped>
   /*scoped代表局部的*/
  .demo{
    background: deeppink;
    padding:5px
  }
</style>


