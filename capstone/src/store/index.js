import { createStore } from 'vuex'
import albums from '@/modules/albums/store'
import photos from '@/modules/photos/store'

export default createStore({
  modules: {
    albums,
    photos
  }
})
