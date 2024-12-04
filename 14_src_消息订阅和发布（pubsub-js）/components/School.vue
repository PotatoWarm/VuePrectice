<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default{
    name:'School',
    data(){
        console.log(this);
        return{
            name:'hefei',
            address:'anhuicaimao'
        }
    },
    mounted(){
        // console.log('school',this);
        //this.$bus.$on('hello',(data) => {
        //console.log('我是school组件，我收到了数据，${data}');
        //})
        this.pubId = pubsub.subscribe('hello',  (name, msg) => {
      //注意这里写剪头函数this才不会丢
      console.log(`有人发布了hello消息，回调被执行,data: ${msg}`);

    });
},
    beforeDestroy(){
        pubsub.unsubscribe(this.pubId);//取消订阅
    }
}
</script>

<style scoped>
       /*scoped代表局部的*/
       .demo{
        background: skyblue;
        padding: 5px;
       }
</style>