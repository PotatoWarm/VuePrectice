export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    //挂载完毕就执行
    mounted() {
        console.log('你好啊')
    }
    //mounted 是生命周期钩子 
}

export const shareData = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}
