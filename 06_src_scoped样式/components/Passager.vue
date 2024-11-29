<template>
    <div class="demo">
        <h2 class="title">乘客姓名：{{name}}</h2>
        <h2>乘客性别：{{sex}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Passager',
    data() {
        console.log(this);
        return {
            name: 'lingling',
            sex: '女'
        }
    },
}
</script>

<style scoped> 
    .demo {
        background-color: deeppink;
    }
</style>

