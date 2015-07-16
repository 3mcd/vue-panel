(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["VuePanel"] = factory();
	else
		root["VuePanel"] = factory();
})(this, function() {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var components = {
	  'v-panel-bar': __webpack_require__(4),
	  'v-panel-content': __webpack_require__(7),
	  'v-panel': __webpack_require__(10)
	};

	module.exports = {
	  install: function (Vue) {
	    for (var prop in components) {
	      Vue.component(prop, components[prop]);
	    }
	  }
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5)
	module.exports.template = __webpack_require__(6)

/***/ },
/* 5 */
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      direction: {
	        type: String,
	        default: 'row'
	      },
	      display: {
	        type: String,
	        default: 'flex'
	      },
	      shrink: {
	        type: Number,
	        default: 0
	      },
	      size: {
	        type: String,
	        default: '30px'
	      }
	    },
	    watch: {
	      direction: function () {
	        this.$broadcast('v-panel-bar:direction', this.direction);
	      }
	    },
	    replace: true,
	  };



/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div v-style=\"display: 'flex', flex-basis: size, flex-direction: direction, flex-shrink: shrink\">\r\n    <content></content>\r\n  </div>\r\n\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)
	module.exports.template = __webpack_require__(9)

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	  module.exports = {
	    data: function () {
	      return {
	        flex: 1,
	        grow: null,
	        shrink: null,
	        basis: null
	      };
	    },
	    props: ['flex', 'grow', 'shrink', 'basis'],
	    replace: true
	  };



/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\r\n  <v-panel-content v-style=\"flex: flex, flex-grow: grow, flex-shrink: shrink, flex-basis: basis\">\r\n    <content></content>\r\n  </v-panel-content>\r\n\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11)
	module.exports.template = __webpack_require__(12)

/***/ },
/* 11 */
/***/ function(module, exports) {

	
	  var common = {
	    'flex-start': ['start'],
	    'flex-end': ['end']
	  };

	  var aliases = {
	    'align-items': common,
	    'align-self': common,
	    'justify-content': common
	  };

	  module.exports = {
	    props: {
	      alignItems: {
	        type: String,
	        default: 'start'
	      },
	      alignSelf: {
	        type: String,
	        default: 'start'
	      },
	      basis: {
	        type: String,
	        default: null
	      },
	      direction: {
	        type: String,
	        default: 'row'
	      },
	      display: {
	        type: String,
	        default: 'flex'
	      },
	      flex: {
	        type: String,
	        default: null
	      },
	      grow: {
	        type: Number,
	        default: 1
	      },
	      justify: {
	        type: String,
	        default: 'start'
	      },
	      order: {
	        type: String,
	        default: 0
	      },
	      shrink: {
	        type: Number,
	        default: 0
	      },
	      size: {
	        type: String,
	        default: '30px'
	      }
	    },
	    computed: {
	      parsedAlignSelf: function () {
	        return this.resolveAlias('align-self', this.$data.alignSelf);
	      },
	      parsedAlignItems: function () {
	        return this.resolveAlias('align-items', this.$data.alignItems);
	      },
	      parsedJustifyContent: function () {
	        return this.resolveAlias('align-items', this.$data.justify);
	      }
	    },
	    methods: {
	      resolveAlias: function (name, value) {
	        var spec = aliases[name],
	            arr, i;
	        for (var prop in spec) {
	          arr = spec[prop];
	          for (i = arr.length - 1; i >= 0; i--) {
	            if (value == arr[i]) return prop;
	          }
	        }
	        return value;
	      }
	    },
	    replace: true
	  };



/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div v-style=\"\r\n    display: display,\r\n    align-self: parsedAlignSelf,\r\n    align-items: parsedAlignItems,\r\n    justify-content: parsedJustifyContent,\r\n    order: order,\r\n    flex: flex,\r\n    flex-grow: grow,\r\n    flex-shrink: shrink,\r\n    flex-basis: basis,\r\n    flex-direction: direction\">\r\n    <content></content>\r\n  </div>\r\n\n";

/***/ }
/******/ ])
});
;