<template>
<div>
  <button @click="click">Like</button>
  {{ post.likes }}
  <Hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</div>
</template>

<script>

import Hashtag from '@/components/Hashtag'
import { store } from '@/model/Store'

export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    
    const click = () => {
      store.incrementLike(props.post)
    }

    return {
      click
    }
  }
}
</script>

<style>

</style>