<template>
<div>
  <img
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
  />
</div>
</template>

<script>

import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import useAlbums from '@/modules/albums/composables/useAlbums'

export default {
  setup() {
    
    const route = useRoute() 
    const { getByAlbum, photos } = useAlbums()

    watchEffect(() => {
      const id = route.params.id
      if (!id) return
      getByAlbum(id)
    })

    return {
      photos
    }
  }
}
</script>

<style>

</style>