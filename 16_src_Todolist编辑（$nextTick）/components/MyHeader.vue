<template>
    <div class="too-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keydown="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid';

export default{
    //注意不管你写的data还是methods也好。甚至是computed计算属性也好都会出现在组件事例对象vc身上
    //属性值不能重名
    name:"MyHeader",
    data(){
        return{
           title:''
        }
        
    },

methods:{
    add(){
        // 将用户的输入框包装成一个todo对象
        console.log(this.title)
        if(!this.title.trim()){
            alert('代办事项不能为空')
            return; // 输入的代办事项为空则不能走下面流程
        }
        const todoObj = {
            id: nanoid(),
            title: this.title,
            done: false
        }
        // 采用自定义事件来修改
        this.$emit('addTodo', todoObj);
        this.title = ''; // 清空输入框
    }
},
}
</script>