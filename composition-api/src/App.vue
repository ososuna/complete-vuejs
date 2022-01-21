<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return {
      count,
      increment
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
button {
  height: 200px;
  width: 200px;
  font-size: 40px; 
}
</style>
