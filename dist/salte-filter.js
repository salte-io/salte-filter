/**
 * salte-filter JavaScript Library v1.0.20
 *
 * @license MIT (https://github.com/salte-io/salte-auth/blob/master/LICENSE)
 *
 * Made with ♥ by Ceci <admin@cecilias.me>
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("salte-filter", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["salte-filter"] = factory(require("angular"));
	else
		root["salte-filter"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./salte-filter.component.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _salteFilter = __webpack_require__(/*! ./salte-filter.html */ 3);\n\nvar _salteFilter2 = _interopRequireDefault(_salteFilter);\n\nvar _salteFilterController = __webpack_require__(/*! ./salte-filter.controller.js */ 2);\n\nvar _salteFilterController2 = _interopRequireDefault(_salteFilterController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  transclude: true,\n  template: _salteFilter2.default,\n  controller: _salteFilterController2.default,\n  bindings: {\n    data: '<',\n    filteredData: '='\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2FsdGUtZmlsdGVyLmNvbXBvbmVudC5qcz9lNWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NhbHRlLWZpbHRlci5odG1sJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vc2FsdGUtZmlsdGVyLmNvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRyYW5zY2x1ZGU6IHRydWUsXG4gIHRlbXBsYXRlLFxuICBjb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGRhdGE6ICc8JyxcbiAgICBmaWx0ZXJlZERhdGE6ICc9J1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zYWx0ZS1maWx0ZXIuY29tcG9uZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj8xMWQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./salte-filter.controller.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SalteFilter = function () {\n  function SalteFilter() {\n    _classCallCheck(this, SalteFilter);\n\n    this.filters = [];\n    this.listeners = [];\n  }\n\n  _createClass(SalteFilter, [{\n    key: \"$onChanges\",\n    value: function $onChanges(changes) {\n      if (changes.data) {\n        this.filter();\n      }\n    }\n  }, {\n    key: \"filter\",\n    value: function filter() {\n      var _this = this;\n\n      this.filteredData = [];\n      if (this.data) {\n        this.data.forEach(function (data) {\n          var valid = true;\n          _this.filters.forEach(function (filter) {\n            if (!filter(data)) {\n              valid = false;\n            }\n          });\n          if (valid) {\n            _this.filteredData.push(data);\n          }\n        });\n      }\n      this.listeners.forEach(function (listener) {\n        return listener(_this.filteredData);\n      });\n    }\n  }, {\n    key: \"addFilter\",\n    value: function addFilter(filter) {\n      if (this.filters.indexOf(filter) === -1) {\n        this.filters.push(filter);\n        this.filter();\n      }\n    }\n  }, {\n    key: \"addFilterListener\",\n    value: function addFilterListener(listener) {\n      if (!listener) return;\n      this.listeners.push(listener);\n    }\n  }, {\n    key: \"removeFilterListener\",\n    value: function removeFilterListener(listener) {\n      var index = this.listeners.indexOf(listener);\n      if (index !== -1) {\n        this.listeners.splice(index, 1);\n      }\n    }\n  }, {\n    key: \"removeFilter\",\n    value: function removeFilter(filter) {\n      var index = this.filters.indexOf(filter);\n      if (index !== -1) {\n        this.filters.splice(index, 1);\n        this.filter();\n      }\n    }\n  }]);\n\n  return SalteFilter;\n}();\n\nexports.default = SalteFilter;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2FsdGUtZmlsdGVyLmNvbnRyb2xsZXIuanM/MDhlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTYWx0ZUZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICAkb25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICBpZiAoIWZpbHRlcihkYXRhKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKHRoaXMuZmlsdGVyZWREYXRhKSk7XG4gIH1cblxuICBhZGRGaWx0ZXIoZmlsdGVyKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVycy5pbmRleE9mKGZpbHRlcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmZpbHRlcnMucHVzaChmaWx0ZXIpO1xuICAgICAgdGhpcy5maWx0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWx0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGlmICghbGlzdGVuZXIpIHJldHVybjtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbW92ZUZpbHRlckxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZpbHRlcihmaWx0ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsdGVycy5pbmRleE9mKGZpbHRlcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zYWx0ZS1maWx0ZXIuY29udHJvbGxlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdkRBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./salte-filter.html ***!
  \***************************/
/***/ function(module, exports) {

eval("module.exports = \"<ng-transclude></ng-transclude>\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NhbHRlLWZpbHRlci5odG1sP2EzZDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NhbHRlLWZpbHRlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./salte-filter.module.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ 1);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _salteFilterComponent = __webpack_require__(/*! ./salte-filter.component.js */ 0);\n\nvar _salteFilterComponent2 = _interopRequireDefault(_salteFilterComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _module = _angular2.default.module('salte.filter', []);\n\n_module.component('salteFilter', _salteFilterComponent2.default);\n\nexports.default = _module.name;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2FsdGUtZmlsdGVyLm1vZHVsZS5qcz9hZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHNhbHRlRmlsdGVyIGZyb20gJy4vc2FsdGUtZmlsdGVyLmNvbXBvbmVudC5qcyc7XG5cbmNvbnN0IG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzYWx0ZS5maWx0ZXInLCBbXSk7XG5cbm1vZHVsZS5jb21wb25lbnQoJ3NhbHRlRmlsdGVyJywgc2FsdGVGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGUubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2FsdGUtZmlsdGVyLm1vZHVsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);
});