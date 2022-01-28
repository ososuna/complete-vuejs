<template>
  <button @click="click">
    {{ album.title }}
  </button>
</template>

<script>

import useAlbums from '@/modules/albums/composables/useAlbums'

export default {
  name: 'Album',
  props: {
    album: {
      // id
      // title
      type: Object,
      required: true
    }
  },
  setup(props) {
    
    const { getByAlbum } = useAlbums()

    const click = async() => {
      await getByAlbum( props.album )
    }

    return {
      click
    }

  }
}
</script>
