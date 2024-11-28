<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
// 引入nanoid 生成唯一id,在作用域内使用 
export default {
    //注意不管你写的data还是methods也好，甚至是computed计算属性也好都会出现在组件事例对象vc身上
    //属性值不能重复
    name: 'MyHeader',
    data(){
        return {
            title: ''
        }
    },
    methods: {
        add(){
            console.log(this.title);
            if(!this.title.trim()) return alert('输入不能为空');
            // console.log(this.title)
            // if(!this.title.trim()) {
            // alert('代办事项不能为空')
            const todoObj = {
                id: nanoid(),
                title: this.title, 
                done: false
            };
            this.$emit('addTodo', todoObj);
            this.title = '';
        }
    },
}
</script>

<style scoped>
.todo-header input{
    width: 500px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus{
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
