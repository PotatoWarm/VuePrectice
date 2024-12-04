<template>
    <div class="student">
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名传递给school组件</button>
    </div>
</template>

<script>
export default{
    name:'Student',
    data(){
        console.log(this);
        return{
            name:'玲玲',
            sex:'女',
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',this.name);
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.student{
    background: orange;
    padding: 5px;
    margin-bottom: 10px;
}
</style>>