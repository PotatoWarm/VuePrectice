<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大3倍为:{{ bigSum }}</h3>
        <h3>我在{{ school }},学习{{ subject }}</h3>
        <h3 style="color:red">下方列表的总人数{{ personList.lenght }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementIfOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapMutations,mapGetters,mapState } from 'vuex';
//核心概念  state，Getters，Mutations，Actions，Modules




export default{
    name:"Count",
    data(){
        return{
            n: 1,//代表用户在select框开始的时候选择的数字
        }
    },
    computed:{
        //借助mapState从state中生成计算属性，对象写法
        //...mapSate({
        //   sum:'sum',
        //   school:'school',
        //   subject:'subject'
        //}),
        //借助mapState从state中生成计算属性，数组写法（即代表了生成的计算属性名为sum，同时也代表了从state找到sum）
        ...mapState('count',['sum','subject','school']),
        ...mapState('person',['personList']),

        //借助mapGetters从getters中生成计算属性，对象写法
        //...mapGetters({ bigSum:'bigSum'}),
        //借助mapGetters从getters中生成计算属性，数组写法
        ...mapGetters('count',['bigSum']),
    },
    methods:{
        //increment(){
        //   this.$store.commit('INCREMENT',this.n);
        //},
        //decrement(){
        //   this.$store.commit('DECREMENT',this.n);
        //},
        //借助mapMutations生成对应方法，方法会调用commit去联系Mutations，对象写法
        ...mapMutations('count',{
            increment:'INCREMENT',
            decrement:'DECREMENT',
        }),
        //借助数组写法生成方法，但注意你生成的方法名和Mutations里面对应的方法名将会一样的
        //...mapMutations(['increment','decrement']),

        //incrementOdd(){
        //  this.$store.dispatch('incrementIfOdd',this.n);
        //}

        //借助mapMutations生成对应方法，方法会调用dispatch去联系actions，对象写法
        //...mapActions({
        //   incrementIfOdd:'incrementIfOdd',
        //   incrementWait:'incrementWait',
        //}),
    
    ...mapActions('count',['incrementWait','incrementIfOdd']),//数组写法，同上
    },
}
</script>

<style scoped>
     button{
        margin-left:5px;
     }
</style>