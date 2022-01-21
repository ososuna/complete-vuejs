<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ msg }}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup() {
    const msg = 'Hello World'

    return {
      msg
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
