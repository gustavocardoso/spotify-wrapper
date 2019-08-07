import { API_URL, HEADERS } from '../src/config'
import { toJSON } from '../src/utils'

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON)
}

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON)
}

export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON)
}
