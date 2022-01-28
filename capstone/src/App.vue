<template>
<Layout>
  <template v-slot:header>
    Header
  </template>
  <template v-slot:sidebar>
    <div
      v-for="album in albums"
      :key="album.id"
    >
    {{ album.title }}
    </div>
  </template>
  <template v-slot:content>
    Content
  </template>
</Layout>
</template>

<script>

import { onMounted } from 'vue'

import Layout from '@/modules/shared/components/Layout'
import useAlbums from '@/modules/albums/composables/useAlbums'

export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {

    const { getAlbums, albums } = useAlbums()

    onMounted(async() => {
      await getAlbums()
    })

    return {
      albums
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
