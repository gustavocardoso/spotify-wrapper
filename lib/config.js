"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQB-sN6w56YHhl22meRkX4vU6VMGesrXn7gQzJ2P2-TXgeNZc8zHa1MR2URbFVATTxGAKbzB_V0nrE5IAwwBtzSpazzfo-Ik_lXUiaNnKMdjWdw_XM5K_gtpomJqUjgG6f2OBuLdsfk-RxF9vjGHuC1lUVY95LTvbv3T2Khpdn1ttzB9EVz4oHaQVnB7Dz293Nd6x6QYP3tX1oPUB6tCTBwflm-2zmjyrKroBLfaN1b5-bMNkRAqHGY6AAztm-WtWusJGonsbzhZew';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;