<template>
<div>
  <button>Like</button>
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

export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>