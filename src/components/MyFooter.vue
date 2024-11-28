<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAllDone"/>
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
    </div>
    

</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        total(){
            return this.todos.length;
        },
        doneTotal(){
            return this.todos.reduce((todoTotal, todo) => {
        //隐士类型转换
                return todoTotal + todo.done;
            }, 0);
            //return this.todos.filter(todo => todo.done).length;
        },
        isAllDone:{
            get(){
                return this.total > 0 && this.todos.every(todo => todo.done);
            },
            set(value){
                //value 注意要么为ture，要么为false，因为你把它应用在了checkbox上
                //this.checkAllTodo(value) 是自定义事件
                this.$emit('checkAllTodo', value);
            }
        }
    },
    methods: {
        clearAllTodo(){
            this.todos = this.todos.filter(todo => !todo.done);
        }
    }
}
</script>

<style scoped>
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button{
    float: right;
    margin-top: 5px;
}
</style>
