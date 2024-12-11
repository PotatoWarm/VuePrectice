<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大3倍为:{{ bigSum }}</h3>
        <h3>我在{{ school }},学习{{ subject }}</h3>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: "Count",
    data() {
        return {
            n: 1, // 代表用户在select框开始的时候选择的数字
        }
    },
    computed: {
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters(['bigSum']),
    },
    methods: {
        ...mapMutations({
            increment: 'INCREMENT',
            decrement: 'DECREMENT',
        }),
        ...mapActions(['incrementWait', 'incrementIfOdd']),
    },
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>