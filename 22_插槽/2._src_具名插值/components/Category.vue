<template>
    <div class="category">
        <h3>{{ title }}</h3>
        /<Demo> :games="listData">我是插槽内容</Demo>
        <slot name="center">我是默认值</slot>
        <slot name="footer">我是默认值</slot>
    </div>
</template>

<script>
export default{
    name:"Category",
    props:['listData','title']
}
</script>

<style scoped>
.category{
    background: skyblue;
    width:200px;
    height: 300px;
}
h3{
    text-align: center;
    background: orange;
}
img{
    width:100%;
}
video{
    width:100%;
}
</style>