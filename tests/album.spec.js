import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Album', () => {
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

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist
    })

    it('shuld have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const album = getAlbum()
      expect(fetchedStub).to.have.been.calledOnce
    })

    // verifica s eo fetch ocorre com a url correta
    it('should call fetch with the correct URL', () => {
      const album = getAlbum('49quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHsc'
      )

      const album2 = getAlbum('51quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/51quOXlETeW88GhTf1zHsc'
      )
    })

    // verifica se o dado é recebido pela promise
    it('should return the correct data from the promise', () => {
      const album = getAlbum('49quOXlETeW88GhTf1zHsc')

      album.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['49quOXlETeW88GhTf1zHsc', '49quOXlETeW88GhTf1zHdf'])

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=49quOXlETeW88GhTf1zHsc,49quOXlETeW88GhTf1zHdf'
      )
    })

    it('should call return the correct data from promise', () => {
      const albums = getAlbums(['49quOXlETeW88GhTf1zHsc', '49quOXlETeW88GhTf1zHdf'])

      albums.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const tracks = getAlbumTracks('49quOXlETeW88GhTf1zHsc')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHsc/tracks'
      )

      const tracks2 = getAlbumTracks('49quOXlETeW88GhTf1zHgh')

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/49quOXlETeW88GhTf1zHgh/tracks'
      )
    })

    it('should return the correct data from promise', () => {
      const tracks = getAlbumTracks('49quOXlETeW88GhTf1zHgh')

      tracks.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })
})
