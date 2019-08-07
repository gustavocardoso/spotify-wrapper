import { searchAlbums } from '../src/main'

global.fetch = require('node-fetch')

const albums = searchAlbums('Ghost')

albums.then(data => console.log(data))
