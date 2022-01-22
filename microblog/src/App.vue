<template>
<div>
  <Card
    v-for="post in store.state.posts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }} 
    </template>
    <template v-slot:content>
      {{ post.content }} 
    </template>
    <template v-slot:description>
      <Controls :post="post" />
    </template>
  </Card>
</div>
</template>

<script>

import { store } from '@/model/Store.js'

import Card from '@/components/Card'
import Controls from '@/components/Controls'

export default {
  name: 'App',
  components: {
    Card,
    Controls
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
img {
  width: 100%;
}
.cards {
  display: flex;
}
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>
