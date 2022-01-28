<template>
  <router-link :to="`/albums/${ album.id }`" >
    {{ album.title }}
  </router-link>
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

<style scoped>
a {
  background: darkcyan;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}
a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>
