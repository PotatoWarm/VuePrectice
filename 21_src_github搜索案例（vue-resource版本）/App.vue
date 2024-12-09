<template>
    <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
import List from './components/List.vue';
import Search from './components/Search.vue';


export default{
    name:"App",
    components:{
        Search,
        List
    }
}
</script>
<style lang="css">
</style>