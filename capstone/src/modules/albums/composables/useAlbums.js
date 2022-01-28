import { useStore } from 'vuex'
import { computed } from 'vue'

const useAlbums = () => {  
  const store = useStore()

  const getAlbums = async() => {
    const resp = await store.dispatch( 'albums/getAlbums' )
    return resp
  }

  const getByAlbum = async( album ) => {
    const resp = await store.dispatch( 'albums/getByAlbum', { album } )
    return resp
  }

  return {
    getAlbums,
    getByAlbum,
    albums: computed(()=>store.getters['albums/getAlbums']),
    photos: computed(()=>store.getters['albums/getPhotos'])
  }
}

export default useAlbums
