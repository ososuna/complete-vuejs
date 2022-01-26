<template>
<Layout>
  <template v-slot:header>
    Header
  </template>
  <template v-slot:sidebar>
    Sidebar
  </template>
  <template v-slot:content>
    Content
  </template>
</Layout>
</template>

<script>

import Layout from '@/modules/shared/components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
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
