<template>
  <li>
    <label>
      <!---label标签可以包含任何内容，比如input标签，所以可以包裹input标签
      li标签的样式 ，作用是让li标签的样式更加美观 
      -->
      <!--这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!--v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据)-->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->
      <span>{{  todo.title }}</span>
    </label>


    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <!--
    btn btn-danger: 按钮的样式
    @click: 点击事件
    handleDelete: 自定义事件 
    todo.id: 传递的参数 
    --> 
  </li>
</template>

<script>
export default {
  name: "Item",
  //声明接收todo
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods:{
    handleCheck(id){
      this.checkTodo(id);
    },
    handleDelete(id){
      if(confirm(`确定删除编号为${id}的todo吗`)){
        // console.log(id);
        this.deleteTodo(id);
      }
    }
  }
}
</script>

<style scoped>
/*item
scoped: 局部样式,常用于组件中，防止样式污染 
*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
  /*cursor: pointer 鼠标悬停在标签上时显示为指针*/
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background: #ddd;
}

li:hover button{
  display: block;
}
</style>
