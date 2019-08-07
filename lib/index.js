"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _main = require("./main");

var _album = require("./album");

var _default = {
  search: _main.search,
  searchAlbums: _main.searchAlbums,
  searchArtists: _main.searchArtists,
  searchPlayLists: _main.searchPlayLists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};
exports["default"] = _default;