<template>
<Layout>
  <template v-slot:header>
    Header
  </template>
  <template v-slot:sidebar>
    <Album
      v-for="album in albums"
      :key="album.id"
      :album="album"
    />
  </template>
  <template v-slot:content>
    <img
      v-for="photo in photos"
      :key="photo.id"
      :src="photo.thumbnailUrl"
    />
  </template>
</Layout>
</template>

<script>

import { onMounted } from 'vue'

import Album from '@/modules/albums/components/Album'
import Layout from '@/modules/shared/components/Layout'

import useAlbums from '@/modules/albums/composables/useAlbums'

export default {
  name: 'App',
  components: {
    Album,
    Layout
  },
  setup() {

    const { getAlbums, albums, photos } = useAlbums()

    onMounted( async() => {
      await getAlbums()
    })

    return {
      albums,
      photos
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
