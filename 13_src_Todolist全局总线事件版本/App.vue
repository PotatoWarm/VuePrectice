<template>
<!-- 
 全局事件总线总结：
 1. 一种组件间通信的方式，适用于任意组件间通信
 2. 安装事件总线：在main.js中
    语法：Vue.prototype.$bus = new Vue()
 3. 使用事件总线：
    1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
    2. 提供数据：this.$bus.$emit('事件名', 数据)    
    3. 最好在beforeDestroy钩子中，用$off()去解绑当前组件所用到的事件
-->


  <div id="root">
    <div class="todo-container">
      <!-- 
        使用v-bind指令将todos数据传递给MyList组件
        container是容器，wrap是包裹
      -->
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos"/>
        <MyFooter
            :todos="todos"
            @clearAllDone="clearAllDone"
            @checkAllTodo="checkAllTodo" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from './components/MyFooter';

// import {nanoid} from 'nanoid'; 引入nanoid库
// 使用export default导出App组件
export default {
  name: "App",
  components:{
    MyList,
    MyFooter,
    MyHeader
  },

  data() {
    return {
      // todos: [
      //   {id: '001', title: '吃饭', done: false},
      //   {id: '002', title: "睡觉", done: true},
      //   {id: '003', title: '打代码', done: false}
      // ]
      todos:JSON.parse(localStorage.getItem('todos')) || []
      // 使用JSON.parse()将localStorage中的todos数据转换为JavaScript对象，
      // 如果localStorage中没有todos数据，则返回一个空数组  
    }
  },

  methods:{
    //清除所有已完成的任务
    clearAllDone(){
      try {
        // 过滤出未完成的任务
        this.todos = this.todos.filter(todo => !todo.done)
        // 更新本地存储
        localStorage.setItem('todos', JSON.stringify(this.todos))
        console.log('清除已完成任务成功')
      } catch (error) {
        console.error('清除任务失败：', error)
      }             
    },
    //添加的todo
    addTodo(todo){
      console.log('我是app组件，我收到了数据');
      this.todos.unshift(todo);
    },
    //勾选或取消勾选
    checkTodo(id){
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    //全选或取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    //清除所有已完成的任务
    clearAllDone(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch:{
    //深度监视
    todos:{
      deep: true, //深度监视当我监视数组中的对象的某个属性的变化它也会产生反应
      handler(newValue) {
        //本地存储存的是key和value都是字符串
        //数据存放在本地存储中
        localStorage.setItem("todos", JSON.stringify(newValue))
      }
    },
  },
  //已挂在绑定事件总线
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo);
    this.$bus.$on('deleteTodo', this.deleteTodo);
  },
  //被卸载注意解绑
  beforeDestroy() {
    this.$bus.$off('checkTodo');
    this.$bus.$off('deleteTodo');
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>


