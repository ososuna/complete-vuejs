<template>
<div>
  <input
    :value="currentTag"
    @input="setHashtag"
  >
  <Card
    v-for="post in filteredPosts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }} 
    </template>
    <template v-slot:content>
      {{ post.content }} 
    </template>
    <template v-slot:description>
      <Controls
        :post="post"
      />
    </template>
  </Card>
</div>
</template>

<script>

import { computed } from 'vue';

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

    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return {
      setHashtag,
      currentTag: computed( () => store.state.currentTag ),
      filteredPosts: computed( () => store.filteredPosts )
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
