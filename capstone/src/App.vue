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

import { ref, onMounted } from 'vue'
import Layout from '@/modules/shared/components/Layout.vue'

const axios = require('axios')

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {

    const albums = ref([])

    onMounted(async() => {
      const { data } = await api.get('albums')
      albums.value = data
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
