import albumsApi from '@/api/albumsApi'

export const getAlbums = async({ commit }) => {
  const { data } = await albumsApi.get('albums')
  commit( 'setAlbums', data )
}

export const getByAlbum = async({ commit }, album ) => {
  const { data } = await albumsApi.get(`photos?album=${ album.id }`)
  commit( 'setPhotos', data )
}
