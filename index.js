(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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
	  'v-panel-content': __webpack_require__(8),
	  'v-panel': __webpack_require__(11)
	};

	module.exports = {
	  install: function (Vue, options) {
	    var component;

	    options = options || {};

	    for (var prop in components) {
	      component = components[prop];

	      component.mixins = component.mixins || [];

	      ;(function (config) {
	        component.mixins.push({
	          data: function () {
	            var data = {};
	            for (var prop in config) {
	              if (config.hasOwnProperty(prop)) {
	                data[prop] = config[prop];
	              }
	            }
	            return data;
	          }
	        });
	      }(options[prop] || options[Vue.util.camelize(prop)]));

	      Vue.component(prop, component);
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
	module.exports.template = __webpack_require__(7)


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var resolveAlias = __webpack_require__(6);

	  module.exports = {

	    props: {
	      alignItems: {
	        type: String,
	        default: 'stretch'
	      },
	      direction: {
	        type: String,
	        default: 'row'
	      },
	      display: {
	        type: String,
	        default: 'flex'
	      },
	      justify: String,
	      shrink: {
	        type: String,
	        default: 0
	      },
	      size: {
	        type: String,
	        default: '30px'
	      }
	    },

	    computed: {

	      parsedAlignItems: function () {
	        return resolveAlias('align-items', this.$data.alignItems);
	      },

	      parsedJustifyContent: function () {
	        return resolveAlias('align-items', this.$data.justify);
	      },

	      _style: function () {
	        return {
	          'align-items': this.parsedAlignItems,
	          'display': this.display,
	          'flex-basis': this.size,
	          'flex-direction': this.direction,
	          'flex-shrink': this.shrink,
	          'justify-content': this.parsedJustifyContent,
	        };
	      }

	    },

	    watch: {
	      direction: function () {
	        this.$broadcast('v-panel-bar:direction', this.direction);
	      }
	    }

	  };

/***/ },
/* 6 */
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

	module.exports = function resolveAlias(name, value) {
	  var spec = aliases[name],
	      arr, i;

	  for (var prop in spec) {
	    arr = spec[prop];
	    for (i = arr.length - 1; i >= 0; i--) {
	      if (value == arr[i]) return prop;
	    }
	  }

	  return value;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9)
	module.exports.template = __webpack_require__(10)


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {

	    props: {
	      flex: String,
	      grow: {
	        type: String,
	        default: 1
	      },
	      shrink: String,
	      basis: {
	        default: 0
	      }
	    },

	    computed: {
	      _style: function () {
	        return {
	          'flex': this.flex,
	          'flex-grow': this.grow,
	          'flex-shrink': this.shrink,
	          'flex-basis': this.basis
	        };
	      }
	    }

	  };

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\r\n    <slot></slot>\r\n  </div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)
	module.exports.template = __webpack_require__(13)


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var resolveAlias = __webpack_require__(6);

	  module.exports = {

	    props: {
	      alignItems: String,
	      alignSelf: String,
	      basis: null,
	      direction: String,
	      display: {
	        type: String,
	        default: 'flex'
	      },
	      flex: String,
	      grow: String,
	      justify: String,
	      order: String,
	      shrink: String
	    },

	    computed: {

	      parsedAlignSelf: function () {
	        return resolveAlias('align-self', this.$data.alignSelf);
	      },

	      parsedAlignItems: function () {
	        return resolveAlias('align-items', this.$data.alignItems);
	      },

	      parsedJustifyContent: function () {
	        return resolveAlias('align-items', this.$data.justify);
	      },

	      _style: function () {
	        return {
	          'display': this.display,
	          'align-self': this.parsedAlignSelf,
	          'align-items': this.parsedAlignItems,
	          'justify-content': this.parsedJustifyContent,
	          'order': this.order,
	          'flex': this.flex,
	          'flex-grow': this.grow,
	          'flex-shrink': this.shrink,
	          'flex-basis': this.basis,
	          'flex-direction': this.direction
	        };
	      }
	    }

	  };

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\r\n    <slot></slot>\r\n  </div>";

/***/ }
/******/ ])
});
;