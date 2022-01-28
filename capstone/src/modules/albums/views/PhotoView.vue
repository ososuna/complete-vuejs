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

import useAlbums from '@/modules/albums/composables/useAlbums'

export default {
  setup() {
    
    const { photos } = useAlbums()

    return {
      photos
    }
  }
}
</script>

<style>

</style>