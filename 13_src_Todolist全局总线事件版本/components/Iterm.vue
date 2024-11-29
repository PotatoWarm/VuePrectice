<template>
    <li>
        <label>
            <!-- 这里勾选和取消勾选可以使用change和click作为事件处理 -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- v-model数据的双向绑定，checked使用v-model来双向绑定其是否被勾选，也可以实现效果但不推荐（因为其实修改了props中的数据）  -->
            <!-- 这里使用了从List修改过来的props，这里的不允许该是浅层次，就是如果props是一个对象则这个修改这个对象的属性，如果修改的是对象的属性，则不会触发更新  -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'Iterm',
    props: ['todo'],
    //props是只读的，不能修改  

    methods: {
        handleCheck(id){
            //点击勾选按钮，通知App组件将对应的todo对象的done值取反
            this.$bus.$emit('checkTodo', id);
        },
        handleDelete(id){
            if(confirm(`确定删除编号为${id}的todo吗？`)){
                // 意思就是通知App组件将对应的todo对象删除
                this.$bus.$emit('deleteTodo', id);
            }
        }
    }
}
</script>   

<style scoped>
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label{
    float: left;
    cursor: pointer;
}
li label input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button{
    float: right;
    display: none;
    margin-top: 3px;
}

li:before{
    content: initial;
}
li:last-child{
    border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>    
