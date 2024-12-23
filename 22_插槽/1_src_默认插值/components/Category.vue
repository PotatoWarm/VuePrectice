<template>
    <div class="category">
        <!-- <category title="美食" ：listData="listData">
            <img src="./img/1.jpg" alt="">
        </category> -->
        <h3>{{ title }}</h3>
        <slot>我是默认值</slot>
        <!-- 定义一个插槽（挖个坑，等着组件的使用着进行填充） -->
    </div>
</template>
                                                                                                                                                                                                                                        
<script>
// import Category from './Category.vue'
export default{
    name:"Category",
    props:['listData','title']
}
</script>

<style scoped>
.category{
    background: skyblue;
    width: 200px;
    height: 300px;
}

h3{
    text-align: center;
    background: orange;
}
img{
    width:100%;
}
</style>