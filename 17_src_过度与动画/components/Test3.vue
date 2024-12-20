<template>
    <div>
        <button @click="isShow = !isShow">
            显示/隐藏
        </button>

        <transition-group
              appear
              name="animate_animated animate_bounce"
              enter-active-class="animate_swing"
              leave-active-class="animate_backOutup"
        >

        <h1 v-show="isShow" key="1">你好！</h1>
        <h1 v-show="isShow" key="2">世界！</h1>
        
        </transition-group>
    </div>
</template>

<script>
import 'animate.css';
export default{
    name:"Test3",
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
h1{
    background: orange;
}
</style>