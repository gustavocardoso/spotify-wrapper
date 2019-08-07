import { API_URL, HEADERS } from '../src/config'
import { toJSON } from '../src/utils'

export const search = (query, type) => {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON)
}

export const searchArtists = query => {
  return search(query, 'artist')
}

export const searchAlbums = query => {
  return search(query, 'album')
}
export const searchTracks = query => {
  return search(query, 'track')
}
export const searchPlayLists = query => {
  return search(query, 'playlist')
}
