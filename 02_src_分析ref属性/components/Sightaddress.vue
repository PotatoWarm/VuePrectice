<template>
    <div class="sightaddress">
        <h1>风景名称：{{sightname}}</h1>
        <h2>风景地址：{{sightaddress}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Sightaddress',
    data() {
        return {
            sightname: '橘子洲头',
            sightaddress: '湖南省长沙市岳麓区橘子洲头',
        }
    }
}
</script>

<style scoped>
.sightaddress {
    background-color:deeppink;
}
</style>

