<template>
    <div class="todo-footer" v-show="total">
        <!-- 全选框 v-show用法：如果total大于0，则显示全选框，否则不显示 -->
        <label>
            <input 
                type="checkbox"
                v-model="isAll" 
                @change="checkAll"/>
                <!-- 
                @用于绑定事件，
                全选框的change事件，
                当全选框的checked值发生变化时，会触发checkAll方法 
                -->
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" 
        @click="handleClearAllDone" 
        v-show="doneTotal > 0">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        doneTotal(){
            return this.todos.filter(todo => todo.done).length
        },
        total(){
            return this.todos.length
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                //value 注意要么为ture，要么为false，因为你把它应用在了checkbox上
                //this.checkAllTodo(value) 是自定义事件
                this.$emit('checkAllTodo', value);
            }
        }
    },
    methods: {
        clearAll(){
            this.$emit('clearAllDone')//触发清除事件 
        },
        checkAll(e){
            this.$emit('checkAllTodo', e.target.checked)
            // 注意：e.target.checked 是全选框的checked值，
            // 当全选框的checked值发生变化时，会触发checkAll方法
        },
        handleClearAllDone(){
            //handleClearAllDone方法用于  清除所有已完成的任务
            if(confirm('确定要清除所有已完成的任务吗？')) {
                // 如果用户点击了确定，则触发清除事件  confirm是确认框
                this.$emit('clearAllDone')  // 触发清除事件
            }
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
