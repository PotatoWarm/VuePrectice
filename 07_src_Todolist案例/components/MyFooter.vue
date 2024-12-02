<template>
    <div class="todo-footer" v-show="total">
     <label>
        <input type="checkbox" v-model="isAll"/>
     </label>
     <span>
        <span>已完成{{doneTotal}}</span> /全部{{total}}
    </span>
    <button class="btn btn-danger" @click="claerAll">清除已完成任务</button>
    </div>
</template>

<script>
export default{
    name:"MyFooter",
    props:['todos','checkAllTodo','clearAllDoneTodo'],
    computed:{
    total(){
        return this.todos.length;
    },
    doneTotal(){
        // 修正了这里的变量名
        return this.todos.reduce((todoTotal, todo) => {
            return todoTotal + todo.done;
        }, 0);
    },
    isAll:{
        get(){
            // 修正了这里的比较运算符
            return this.total === this.doneTotal && this.doneTotal > 0;
        },
        set(value){
            this.checkAllTodo(value);
        }
    }
},
}
</script>