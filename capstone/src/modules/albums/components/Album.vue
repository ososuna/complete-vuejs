<template>
  <button @click="click">
    {{ album.title }}
  </button>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: {
      // id
      // title
      type: Object,
      required: true
    }
  }
}
</script>
