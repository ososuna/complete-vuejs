
import albumsApi from '@/api/albumsApi'

export const getAlbums = async({ commit }) => {
  const { data } = await albumsApi.get('albums')
  commit( 'setAlbums', data )
}