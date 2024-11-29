<template>
  <div>
    <Passager></Passager>
    <hr/>
    <Sightaddress></Sightaddress>
  </div>
</template>

<script>
import Passager from '@/components/Passager.vue';
import Sightaddress from '@/components/Sightaddress.vue';

export default {
    name: 'App',
    components: {
        Passager,
        Sightaddress
    },
}
</script>

