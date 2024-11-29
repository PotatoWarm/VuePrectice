<template>
  <div class="sightadress">
    <h2>景点名称：{{ sightname }}</h2>
    <h2>景点地址：{{ sightadress }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Sightadress',
  data() {
    return {
      sightname: '橘子洲头',
      sightadress: '湖南省长沙市岳麓区橘子洲头'
    }
  }
}
</script>

<style scoped>
.sightadress {
  background-color:deeppink;
}
</style>
