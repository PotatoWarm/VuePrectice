<template>
   <div class="app">
      <h1>{{ msg }}</h1>
      <School/>
      <Student/>
   </div>
</template>

<script>
import Student from "@/components/Student.vue";
import School from "@/components/School.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: 'helloこんにちは',
      studentName: ''
    }
  }
}
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .app{
     background: skyblue;
     padding: 5px;
   }
</style>


