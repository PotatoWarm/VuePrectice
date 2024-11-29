<template>
    <div>
        <h2 @click="showName">风景名称：{{sightname}}</h2>
        <h2>风景地址：{{sightaddress}}</h2>
    </div>
</template>

<script>
import { mixin, shareDate } from '@/mixin';//注意


export default {
    //export default 导出的是一个对象
    name: 'Sightaddress',
    data() {
        console.log(this);
        return {
            sightname: '橘子洲头',
            sightaddress: '湖南省长沙市岳麓区橘子洲头',
        }
        },
    mixins: [mixin, shareDate]//注意
}
</script>

