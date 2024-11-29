export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('你好啊');
        //注意：混合中配置的钩子函数，在组件中也会执行
    }
}

export const shareDate = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}
