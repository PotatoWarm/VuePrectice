export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('你好啊');
    }
}

export const shareDate = {
    data() {
        return {
            name: 'lingling'
        }
    }
}
