import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlayLists
} from '../src/main'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  let fetchedStub
  let promise

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.resolves({
      json: () => ({
        body: 'json'
      })
    })
  })

  afterEach(() => {
    fetchedStub.restore()
  })

  describe('Smoke Tests', () => {
    // search (generic) - more than one type
    // searcHAlbums
    // searchArtists
    // searchTracks
    // searchPlayLists

    it('should exist the search method', () => {
      expect(search).to.exist
    })

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    })

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist
    })

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist
    })

    it('should exist the searchPlayLists method', () => {
      expect(searchPlayLists).to.exist
    })
  })

  describe('Generic Search', () => {
    it('should call the fetch method', () => {
      const artist = search()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artist = search('Ghost', 'artist')

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Ghost&type=artist'
        )

        const albums = search('Ghost', 'album')

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Ghost&type=album'
        )
      })

      context('passing more than one type', () => {
        const artistAndAlbums = search('Ghost', ['artist', 'album'])

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Ghost&type=artist,album'
        )
      })
    })

    it('should return the JSON data from the promise', () => {
      const artist = search('Ghost', 'artist')

      artist.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const artist = searchArtists('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=artist'
      )

      const artist2 = searchArtists('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=artist'
      )
    })
  })

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=album'
      )

      const albums2 = searchAlbums('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=album'
      )
    })
  })

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=track'
      )

      const tracks2 = searchTracks('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=track'
      )
    })
  })

  describe('searchPlayLists', () => {
    it('should call fetch function', () => {
      const playLists = searchTracks('Ghost')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const playLists = searchPlayLists('Ghost')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Ghost&type=playlist'
      )

      const playLists2 = searchPlayLists('Beatles')
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Beatles&type=playlist'
      )
    })
  })
})
