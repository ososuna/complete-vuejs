<template>
<div>
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
        @setHashtag="setHashtag"
      />
    </template>
  </Card>
</div>
</template>

<script>

import { computed, ref } from 'vue';

import { store } from '@/model/Store.js'

import Card from '@/components/Card'
import Controls from '@/components/Controls'

export default {
  name: 'App',
  emits: ['setHashtag'],
  components: {
    Card,
    Controls
  },
  setup() {
    const currentTag = ref()

    const setHashtag = (hashtag) => {
      currentTag.value = hashtag
    }

    const filteredPosts = computed(() => {
      if (!currentTag.value) {
        return store.state.posts
      }
      return store.state.posts.filter(
        post => post.hashtags.includes(currentTag.value)
      )
    })

    return {
      filteredPosts,
      setHashtag
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
