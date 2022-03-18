<template>
<div>
  <HelloWorld msg="Problema de Monty Hall"/>
  <GiftHall />
</div>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GiftHall from './components/Gift.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GiftHall
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
