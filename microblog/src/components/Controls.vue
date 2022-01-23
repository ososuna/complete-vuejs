<template>
<div>
  <button>Like</button>
  {{ post.likes }}
  <Hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
    @setHashtag="setHashtag"
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
  },
  setup(props, context) {

    const setHashtag = (hashtag) => {
      context.emit('setHashtag', hashtag)
    }

    return {
      setHashtag
    }
  }
}
</script>

<style>

</style>