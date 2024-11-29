<template>
    <div>
        <h2>乘客姓名：{{name}}</h2>
        <h2>乘客性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name"/>
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
    }
}
</script>

