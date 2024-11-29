<template>
    <div>
      <Student></Student>
      <hr/>
      <School></School>
    </div>
</template>

<script>
import Student from '@/components/Passager.vue';
import School from '@/components/Sightaddress.vue';
export default {
  name: 'App',
  components: { Student, School },
}
</script>

<style scoped>
    h2 {
        color: deeppink;
    }
</style>
