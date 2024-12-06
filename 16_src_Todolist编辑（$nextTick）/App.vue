<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <myHeader @addTodo="addTodo"/>
                <List
                     :todos="todos"
                />
                <MyFooter
                     :todos="todos"
                     @checkAllTodo="checkAllTodo"
                     @clearAllDoneTodo="clearAllDoneTodo"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import List from '@/components/List';
import MyFooter from '@/components/MyFooter';
import PubSub from "pubsub-js"; 
//improt引入的组件需要注入到对象中才能使用


export default{
    name:"App",
    components:{
        List,
        MyFooter,
        MyHeader
    },
    data(){
        //存放数据
        return{
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods:{
        clearAllDoneTodo() {
        this.todos = this.todos.filter(todo => !todo.done);
    },
    // 
        //生命周期-创建完成（可以访问当前this实例）
        addTodo(todo){
            console.log('我是app组件,我收到了数据');
            this.todos.unshift(todo);
        },
        checkTodo(id){
            const todo = this.todos.find(todo => todo.id === id);
            todo.done =!todo.done;
        },
        deleteTodo(_,id){
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        checkAllTodo(done){
            this.todos.forEach(todo => todo.done = done);
            },
        updateTodo(id,title){
            this.todos.forEach(todo => {
                if(todo.id === id)todo.title = title;
            })
        }
    },
    watch:{
        //深度监视
      todos:{
        deep:true,//深度监视当我监视数组中的对象的某个属性变化它也会产生反应
        handler(newValue){
            //本地存储存的是可以和value都是字符串
            //数据存放在本地存储中
            localStorage.setItem("todos",JSON.stringify(newValue))
        },
      },  
    },
    //已挂在绑定事件总线
    mounted(){
        this.$bus.$on('checkTodo',this.checkTodo);
        this.$bus.$on('updateTodo',this.updateTodo);
        this.pubId = PubSub.subscribe('deleteTodo',this.deleteTodo);
    },
    //被卸载注意解绑
    beforeDestory(){
        //生命周期钩子-挂载之前
        this.$bus.$off('checkTodo');
        this.$bus.$off('updateTodo');
        PubSub.unsubscribe(this.pubId);//   取消订阅的方式与取消定时器的方式是类似的，记住
    }
}
</script>

<style>
body{
    background: inline-block;
    padding:4px 12px;
    margin-bottom: 0;
    font-size:14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    border-radius:4px;
}

.btn-danger{
    color:#fff;
    background-color:#da4f49;
    border:1px solid #bd362f;
}

.btn-danger:hover{
    color:#fff;
    background-color: #bd362f;
}

.btn-edit{
    color: #fff;
    background-color: skyblue;
    border:1 px solid rgb(103,150,180);
    margin-right:5px;
}

.btn:focus{
    outline:none;
}

.todo-container .todo-wrap{
    padding:10px;
    border:1px solid #ddd;
    border-radius:5px;
}
</style>