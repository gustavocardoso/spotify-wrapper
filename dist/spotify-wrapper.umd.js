(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */ \"./src/index.js\").default\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlXcmFwcGVyLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL2luZGV4JykuZGVmYXVsdFxuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbum\", function() { return getAlbum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbums\", function() { return getAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbumTracks\", function() { return getAlbumTracks; });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\n\n\nvar getAlbum = function getAlbum(id) {\n  return fetch(\"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], \"/albums/\").concat(id), _src_config__WEBPACK_IMPORTED_MODULE_0__[\"HEADERS\"]).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n};\nvar getAlbums = function getAlbums(ids) {\n  return fetch(\"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], \"/albums/?ids=\").concat(ids), _src_config__WEBPACK_IMPORTED_MODULE_0__[\"HEADERS\"]).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n};\nvar getAlbumTracks = function getAlbumTracks(id) {\n  return fetch(\"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], \"/albums/\").concat(id, \"/tracks\"), _src_config__WEBPACK_IMPORTED_MODULE_0__[\"HEADERS\"]).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy9hbGJ1bS5qcz9mZGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwsIEhFQURFUlMgfSBmcm9tICcuLi9zcmMvY29uZmlnJ1xuaW1wb3J0IHsgdG9KU09OIH0gZnJvbSAnLi4vc3JjL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZ2V0QWxidW0gPSBpZCA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvJHtpZH1gLCBIRUFERVJTKS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsYnVtcyA9IGlkcyA9PiB7XG4gIHJldHVybiBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvP2lkcz0ke2lkc31gLCBIRUFERVJTKS50aGVuKHRvSlNPTilcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsYnVtVHJhY2tzID0gaWQgPT4ge1xuICByZXR1cm4gZmV0Y2goYCR7QVBJX1VSTH0vYWxidW1zLyR7aWR9L3RyYWNrc2AsIEhFQURFUlMpLnRoZW4odG9KU09OKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL, HEADERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERS\", function() { return HEADERS; });\nvar TOKEN_API = 'BQB-sN6w56YHhl22meRkX4vU6VMGesrXn7gQzJ2P2-TXgeNZc8zHa1MR2URbFVATTxGAKbzB_V0nrE5IAwwBtzSpazzfo-Ik_lXUiaNnKMdjWdw_XM5K_gtpomJqUjgG6f2OBuLdsfk-RxF9vjGHuC1lUVY95LTvbv3T2Khpdn1ttzB9EVz4oHaQVnB7Dz293Nd6x6QYP3tX1oPUB6tCTBwflm-2zmjyrKroBLfaN1b5-bMNkRAqHGY6AAztm-WtWusJGonsbzhZew';\nvar API_URL = 'https://api.spotify.com/v1';\nvar HEADERS = {\n  headers: {\n    Authorization: \"Bearer \".concat(TOKEN_API)\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeVdyYXBwZXIvLi9zcmMvY29uZmlnLmpzP2RiNDkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVE9LRU5fQVBJID1cbiAgJ0JRQi1zTjZ3NTZZSGhsMjJtZVJrWDR2VTZWTUdlc3JYbjdnUXpKMlAyLVRYZ2VOWmM4ekhhMU1SMlVSYkZWQVRUeEdBS2J6Ql9WMG5yRTVJQXd3QnR6U3Bhenpmby1Ja19sWFVpYU5uS01kaldkd19YTTVLX2d0cG9tSnFVamdHNmYyT0J1TGRzZmstUnhGOXZqR0h1QzFsVVZZOTVMVHZidjNUMktocGRuMXR0ekI5RVZ6NG9IYVFWbkI3RHoyOTNOZDZ4NlFZUDN0WDFvUFVCNnRDVEJ3ZmxtLTJ6bWp5cktyb0JMZmFOMWI1LWJNTmtSQXFIR1k2QUF6dG0tV3RXdXNKR29uc2J6aFpldydcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEnXG5cbmV4cG9ydCBjb25zdCBIRUFERVJTID0ge1xuICBoZWFkZXJzOiB7XG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1RPS0VOX0FQSX1gXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ \"./src/album.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  search: _main__WEBPACK_IMPORTED_MODULE_0__[\"search\"],\n  searchAlbums: _main__WEBPACK_IMPORTED_MODULE_0__[\"searchAlbums\"],\n  searchArtists: _main__WEBPACK_IMPORTED_MODULE_0__[\"searchArtists\"],\n  searchPlayLists: _main__WEBPACK_IMPORTED_MODULE_0__[\"searchPlayLists\"],\n  getAlbum: _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbum\"],\n  getAlbums: _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbums\"],\n  getAlbumTracks: _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbumTracks\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlYXJjaCwgc2VhcmNoQWxidW1zLCBzZWFyY2hBcnRpc3RzLCBzZWFyY2hQbGF5TGlzdHMgfSBmcm9tICcuL21haW4nXG5pbXBvcnQgeyBnZXRBbGJ1bSwgZ2V0QWxidW1zLCBnZXRBbGJ1bVRyYWNrcyB9IGZyb20gJy4vYWxidW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VhcmNoLFxuICBzZWFyY2hBbGJ1bXMsXG4gIHNlYXJjaEFydGlzdHMsXG4gIHNlYXJjaFBsYXlMaXN0cyxcbiAgZ2V0QWxidW0sXG4gIGdldEFsYnVtcyxcbiAgZ2V0QWxidW1UcmFja3Ncbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlayLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchArtists\", function() { return searchArtists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchAlbums\", function() { return searchAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchTracks\", function() { return searchTracks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPlayLists\", function() { return searchPlayLists; });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\n\n\nvar search = function search(query, type) {\n  return fetch(\"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], \"/search?q=\").concat(query, \"&type=\").concat(type), _src_config__WEBPACK_IMPORTED_MODULE_0__[\"HEADERS\"]).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n};\nvar searchArtists = function searchArtists(query) {\n  return search(query, 'artist');\n};\nvar searchAlbums = function searchAlbums(query) {\n  return search(query, 'album');\n};\nvar searchTracks = function searchTracks(query) {\n  return search(query, 'track');\n};\nvar searchPlayLists = function searchPlayLists(query) {\n  return search(query, 'playlist');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlXcmFwcGVyLy4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMLCBIRUFERVJTIH0gZnJvbSAnLi4vc3JjL2NvbmZpZydcbmltcG9ydCB7IHRvSlNPTiB9IGZyb20gJy4uL3NyYy91dGlscydcblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IChxdWVyeSwgdHlwZSkgPT4ge1xuICByZXR1cm4gZmV0Y2goYCR7QVBJX1VSTH0vc2VhcmNoP3E9JHtxdWVyeX0mdHlwZT0ke3R5cGV9YCwgSEVBREVSUykudGhlbih0b0pTT04pXG59XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hBcnRpc3RzID0gcXVlcnkgPT4ge1xuICByZXR1cm4gc2VhcmNoKHF1ZXJ5LCAnYXJ0aXN0Jylcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEFsYnVtcyA9IHF1ZXJ5ID0+IHtcbiAgcmV0dXJuIHNlYXJjaChxdWVyeSwgJ2FsYnVtJylcbn1cbmV4cG9ydCBjb25zdCBzZWFyY2hUcmFja3MgPSBxdWVyeSA9PiB7XG4gIHJldHVybiBzZWFyY2gocXVlcnksICd0cmFjaycpXG59XG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheUxpc3RzID0gcXVlcnkgPT4ge1xuICByZXR1cm4gc2VhcmNoKHF1ZXJ5LCAncGxheWxpc3QnKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toJSON\", function() { return toJSON; });\nvar toJSON = function toJSON(data) {\n  return data.json();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5V3JhcHBlci8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b0pTT04gPSBkYXRhID0+IGRhdGEuanNvbigpXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });
});