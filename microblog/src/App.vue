<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div
    v-for="post in store.state.posts"
    :key="post.id"
  >
  {{ post.title }}
  </div>
</div>
</template>

<script>

import { store } from '@/model/Store.js'

export default {
  name: 'App',
  components: {
  },
  setup() {
    return {
      store
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
