<template>
<div>
  <HelloWorld msg="Problema de Monty Hall"/>
  <div class="form">
            <div v-if="!started">
                <label for="portsAmount">Quantas portas? </label>
                <input type="text" id="portsAmount" size="3"
                    v-model.number="portsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedPort">Qual porta é premiada? </label>
                <input type="text" id="selectedPort" size="3"
                    v-model.number="selectedPort">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <DoorHall :hasGift="i === selectedPort" :number="i" />
            </div>
        </div>
</div>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DoorHall from './components/Door.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DoorHall
  },
  data: function() {
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
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
