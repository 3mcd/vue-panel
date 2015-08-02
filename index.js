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
	  install: function (Vue, options) {
	    var component;

	    options = options || {};

	    for (var prop in components) {
	      component = components[prop];

	      var ready = component.ready;

	      component.ready = (function (config) {
	        return function () {
	          if (config) {
	            for (var prop in config) {
	              this.$set(prop, config[prop]);
	            }
	          }
	          if (ready instanceof Function) {
	            ready();
	          }
	        };
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
	module.exports.template = __webpack_require__(6)


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	    data: function () {
	      return {
	        class: ''
	      };
	    },
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
	        this.$broadcast('div:direction', this.direction);
	      }
	    },
	    ready: function () {
	      var config = this.constructor.pluginConfig;
	      console.dir(this.constructor);

	      if (config) {
	        for (var prop in config) {
	          this.$set(prop, config[prop]);
	        }
	      }
	    }
	  };

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div v-class=\"class\" v-style=\"\n    display: 'flex',\n    flex-basis: size,\n    flex-direction: direction,\n    flex-shrink: shrink\">\n    <content></content>\n  </div>";

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
	        class: ''
	      };
	    },
	    props: {
	      flex: String,
	      grow: {
	        type: Number,
	        default: 1
	      },
	      shrink: Number,
	      basis: {
	        default: 0
	      }
	    }
	  };

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div v-class=\"class\" v-style=\"\n    flex: flex,\n    flex-grow: grow,\n    flex-shrink: shrink,\n    flex-basis: basis\">\n    <content></content>\n  </div>";

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
	    data: function () {
	      return {
	        class: ''
	      };
	    },
	    props: {
	      alignItems: String,
	      alignSelf: String,
	      basis: {},
	      direction: String,
	      display: {
	        type: String,
	        default: 'flex'
	      },
	      flex: String,
	      grow: Number,
	      justify: String,
	      order: Number,
	      shrink: Number
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
	    }
	  };

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div v-class=\"class\" v-style=\"\n    display: display,\n    align-self: parsedAlignSelf,\n    align-items: parsedAlignItems,\n    justify-content: parsedJustifyContent,\n    order: order,\n    flex: flex,\n    flex-grow: grow,\n    flex-shrink: shrink,\n    flex-basis: basis,\n    flex-direction: direction\">\n    <content></content>\n  </div>";

/***/ }
/******/ ])
});
;