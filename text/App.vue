<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"/>
                <MyList :todos="todos"/>
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDoneTodo="clearAllDoneTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
//导入语句
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';
export default {
    name: 'App',
    components: {
        MyHeader, MyList, MyFooter
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        addTodo(todo) {
            console.log('我是app组件，我收到了数据');
            this.todos.unshift(todo);
        },

        checkTodo(id){
            const todo = this.todos.find((todo) => todo.id === id);
            todo.done = !todo.done;
        },

        deleteTodo(id){
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },

        checkAllTodo(done){
            this.todos.forEach((todo) => {
                todo.done = done;
            });
        },

        clearAllDoneTodo(){
            this.todos = this.todos.filter((todo) => !todo.done);
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(newValue) {
                localStorage.setItem('todos', JSON.stringify(newValue));
            }
        },
    },

    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo);
        this.$bus.$on('deleteTodo', this.deleteTodo);
    },
    beforeMount() {
        this.$bus.$off('checkTodo');
        this.$bus.$off('deleteTodo');
    }
}
</script>

<style>
body{
    background-color: #ddd;
}

.btn{
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

.btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
    border: 1px solid #bd362f;
}

.btn-danger:hover{
    color:#fff;
    background-color: #bd362f;
}

.btn:focus{
    outline: none;
}

.todo-container{
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
