/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Dashboard() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Dashboard Page");
}

/***/ }),

/***/ "./src/pages/PluginPosta.js":
/*!**********************************!*\
  !*** ./src/pages/PluginPosta.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginPosta)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PluginPosta() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "APP PAGE");
}

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCounter: () => (/* binding */ addCounter),
/* harmony export */   removeCounter: () => (/* binding */ removeCounter),
/* harmony export */   setCounterValue: () => (/* binding */ setCounterValue)
/* harmony export */ });
function addCounter(counterId) {
  return {
    type: 'ADD_COUNTER',
    counterId
  };
}
function removeCounter(counterId) {
  return {
    type: 'REMOVE_COUNTER',
    counterId
  };
}
function setCounterValue(counterId, value) {
  return {
    type: 'SET_COUNTER_VALUE',
    counterId,
    value
  };
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/store/selectors.js");
// Load dependencies




(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('react-example/counters', {
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [...state, {
        id: action.counterId,
        value: 0
      }];
    case 'REMOVE_COUNTER':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(state, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(state, {
        id: action.counterId
      }));
    case 'SET_COUNTER_VALUE':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(state, counter => counter.id === action.counterId ? {
        ...counter,
        value: action.value
      } : counter);
  }
  return state;
}

/***/ }),

/***/ "./src/store/selectors.js":
/*!********************************!*\
  !*** ./src/store/selectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCounterIds: () => (/* binding */ getCounterIds),
/* harmony export */   getCounterValue: () => (/* binding */ getCounterValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function getCounterIds(state) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(state, 'id');
}
function getCounterValue(state, counterId) {
  const counter = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(state, {
    id: counterId
  }) || {};
  return counter.value;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _pages_PluginPosta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/PluginPosta */ "./src/pages/PluginPosta.js");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.js");

// Import dependencies




const dashboard = document.getElementById("dashboard");
const pluginPosta = document.getElementById("posta-web-1");
// add more root elements and providers as needed
const rootElement = dashboard || pluginPosta;
const App = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, pluginPosta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_PluginPosta__WEBPACK_IMPORTED_MODULE_3__["default"], null), pluginPosta), dashboard && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null), dashboard));
if (rootElement) {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map