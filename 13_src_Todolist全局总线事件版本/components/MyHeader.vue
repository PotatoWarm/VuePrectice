<template>
    <div class="todo-header" >
      <input type="text" 
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addTodo"/>
    </div>
  </template>
  
  <script>
  import { nanoid } from 'nanoid';
  export default {
    //注意不管是你写的data也还还是methods也好，甚至是computed计算属性也好都会出现在组件事例对象vc身上
    //属性值不能重名
    name: "MyHeader",
    data(){
      return {
        title: ''
      }
    },
    methods:{
      addTodo(e){
        //将用户的输入包装成一个todo对象
        if(!e.target.value.trim()) {
          alert('代办事项不能为空')
          return; //输入的代办事项为空则不走下面流程
        }
        const todoObj = {
          id: nanoid(),
          title:  e.target.value.trim(),
          done:false
        }
        // console.log(todoObj);
        // this.addTodo(todoObj);
        //采用自定义事件来修改
        this.$emit('addTodo',todoObj);
        e.target.value = ''
      }
    }
  }
  </script>
  
  <style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  </style>
  