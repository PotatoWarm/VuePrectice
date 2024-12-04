<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
import Student from '@/components/Student.vue';
import School from '@/components/School.vue';

export default{
    name:"App",
    components:{
        School,
        Student,
    },
    data(){
        return{
            msg:'hello world!',
            studentName:''
        }
    }
}
</script>

<style>
     /*全局样式是不需要加scoped全局共享*/
    .app{
        background:deeppink;
        padding: 5px;
    }
</style>
