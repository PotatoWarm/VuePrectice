<template>
    <div class="demo">
        <h2>风景名称：{{sightname}}</h2>
        <h2>风景地址：{{sightaddress}}</h2>
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
}
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>


