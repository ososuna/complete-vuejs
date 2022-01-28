import albumsApi from '@/api/albumsApi'

export const getAlbums = async({ commit }) => {
  const { data } = await albumsApi.get('albums')
  commit( 'setAlbums', data )
}

export const getByAlbum = async({ state, commit }, album ) => {
  if (state.cache[album.id]) {
    commit( 'setPhotos', state.cache[album.id], album.id )
    return
  }
  const { data } = await albumsApi.get(`photos?album=${ album.id }`)
  commit( 'setPhotos', data, album.id )
}
