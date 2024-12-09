<template>
    <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
import Search from "@/components/Search.vue";//确保路径和名称正确
import List from "@/components/List";

export default{
    name:'App',
    components:{
        Search,//注册组件
        List
    }
}
</script>

<style lang="css">
</style>