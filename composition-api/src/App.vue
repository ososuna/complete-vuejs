<template>
<div>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</div>
</template>

<script>

import { useNumbers } from '@/composables/useNumbers'

export default {
  name: 'App',
  setup() {
    return useNumbers()
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
