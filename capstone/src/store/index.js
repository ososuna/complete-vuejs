import { createStore } from 'vuex'
import albums from '@/modules/albums/store'

export default createStore({
  modules: {
    albums
  }
})
