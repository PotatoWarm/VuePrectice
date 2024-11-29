<template>
  <Passenger name="lingling" :age="20" sex="女"></Passenger>
  <!-- : 或 v-bind: 前缀 -->
</template>

<script>
import Passenger from './components/Passenger.vue';

export default {
  name: 'App',
  components: {
    Passenger,
  },
}
</script>

