<template>
    <div>
        <h2 @click="showName">乘客姓名：{{name}}</h2>
        <h2>乘客性别：{{sex}}</h2>
    </div>
</template>

<script>
import { mixin, shareDate } from '@/mixin';
export default {
    name: 'Passager',
    data() {
        console.log(this);
        return {
            name: 'lingling',
            sex: '女',
            age: 21 //如果混合中配置了与data（或者配置了相同的methods）相同的属性值，则以你的配置为主（而不以mixin为主）
        }
    },
    mounted() {
        console.log('Passager组件挂载完毕');//但对于生命周期钩子是都会保存的（混合的钩子比你配置的钩子先跑）
    },
    mixins: [mixin, shareDate]
}
</script>