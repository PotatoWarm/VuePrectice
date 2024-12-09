<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
export default{
    name:"search",
    data(){
        return{
            keyword:'',
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListDate',{
                isFirst:false,
                isLoading:true,
                errMsg:'',
                user:[]
            })
            this.$http.get('http://api.github.com/search/users?q=${this.keyword}')
            .then(res => {
                console.log(res.data.items);
                this.$bus.$emit("updateListData",{
                    isLoading:false,
                    errMsg:'',
                    users:res.data.items
                });
            })
            .catch(e => {
                console.log('请求失败：${e.message}')
                this.$bus.$emit('updateListData',{
                    isLoading:false,
                    errMsg:e.message,
                    users:[]
                });
            });
        }
    }
}
</script>

<style scoped>
</style>