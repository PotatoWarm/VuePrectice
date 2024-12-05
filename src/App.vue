<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-warp">
                <MyHeader @addTodo = "addTodo"/>
                <List
                     :todos = "todos"
                />
                <MyFooter
                     :todos = "todos"
                     @checkAllTodo="checkAllTodo"
                     @clearAllDoneTodo="clearAllDoneTodo"
                />
            </div>
        </div>
    </div>
</template>

<script>
//导入
import MyHeader from '@/components/MyHeader.vue';
import List from '@/components/List.vue';
import MyFooter from '@/components/MyFooter.vue';
import PubSub from 'pubsub-js';

export default{
    name:"App",
    components:{
        List,
        MyFooter,
        MyHeader
    },
    data(){
        return{
            todos:JSON.parse(localStorage.getItem('todos')) || [],
            //添加$bus的定义
            $bus:new Vue()
            //假设使用vue实例作为事件总线
        }
    },
    methods:{
        addTodo(todo){
            console.log('我是组件app,我收到了数据');
            this.todos.unshift(todo);
        },
        checkTodo(id){
            const todo = this.todos.find(todo => todo.id ===id);
            todo.done =! todo.done;
        },
        deleteTodo(msg,id){
            this.todos = this.todos.filter(todo => todo.id !== id );
        },
        checkAllTodo(done){
            this.todos.forEach(todo => todo.done = done);
        },

        clearAllDoneTodo(){
            this.todos = this.todos.filter(todo => !todo.done)
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(newValue){
                localStorage.setItem("todos",JSON.stringify(newValue))
            }
        },
    },
    mounted(){
        this.$bus.$on('checkTodo',this.checkTodo);
        this.PubId = pubsub.subscribe('deleteTodo',this.deleteTodo);
    },
    beforeMount(){
        this.$bus.$off('checkTodo');
        pubsub.unsubscribe(this.PubId);
    }
}
</script>

<style>
    body{
        background: #fff;
    }

    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size:14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
        border-radius: 4px;
    }

    .btn-danger{
        color:#fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover{
        color: #fff;
        background-color:#bd362f;
    }
    
    .btn:focus{
        outline:none;
    }

    .todo-container{
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap{
        padding:10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>