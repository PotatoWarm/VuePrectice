<template>
    <div>
        <h2>风景名称：{{sightname}}</h2>
        <h2>风景地址：{{sightaddress}}</h2>
        <button @click="showName">点我提示风景名称</button>
    </div>
</template>

<script>
export default {
    name: 'Sightaddress',
    data() {
        console.log(this);
        return {
            sightname: '橘子洲头',
            sightaddress: '湖南省长沙市岳麓区橘子洲头',
        }
    },
    methods: {
        showName() {
            alert(this.sightname);
        }
    }
}
</script>

