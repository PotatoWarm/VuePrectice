<template>
  <div>
    <img src="./assets/favicon.png" alt="logo">
    <Passenger />
    <Sightadress />
  </div>
</template>

<script>
import Passenger from './components/Passenger';
import Sightadress from "./components/Sightadress";

export default {
 name: "App",
  //汇总所有的组件
 components:{
   Passenger,
   Sightadress
 }
}
</script>