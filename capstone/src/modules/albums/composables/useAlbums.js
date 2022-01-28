import { useStore } from 'vuex'
import { computed } from 'vue'

const useAlbums = () => {  
  const store = useStore()

  const getAlbums = async() => {
    const resp = await store.dispatch( 'albums/getAlbums' )
    return resp
  }

  return {
    getAlbums,
    albums: computed(()=>store.getters['albums/getAlbums'])
  }
}

export default useAlbums
