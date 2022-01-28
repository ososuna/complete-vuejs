export const setAlbums = ( state, albums ) => {
  state.albums = albums
}

export const setPhotos = ( state, photos, albumId ) => {
  state.photos = photos.splice(0, 100)
  state.cache[albumId] = photos
}
