<template>
<div>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
</div>
</template>

<script>

import { ref, reactive  } from 'vue'

export default {
  name: 'App',
  setup() {
    // ref -> number, string
    const count = ref(0)
    // reactive -> {}
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (n) => {
      numbers[n]++
    }

    const increment = () => {
      count.value++
    }

    return {
      count,
      increase,
      increment,
      numbers
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
