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
	  'v-panel-bar': __webpack_require__(1),
	  'v-panel-content': __webpack_require__(5),
	  'v-panel': __webpack_require__(11)
	};

	module.exports = {
	  install: function (Vue) {
	    for (var prop in components) {
	      Vue.component(prop, components[prop]);
	    }
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2)
	module.exports.template = __webpack_require__(4)

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    data: function () {
	      return {
	        size: '30px',
	        display: 'flex'
	      };
	    },
	    props: ['direction', 'size'],
	    replace: true,
	    mixins: [__webpack_require__(3)]
	  };



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  ready: function () {
	    for (var i = this._transCpnts.length - 1; i >= 0; i--) {
	      this.bindData(this._transCpnts[i]);
	    }
	  },
	  methods: {
	    bindData: function (cpnt) {
	      var _this = this;
	      var props = cpnt.$options.props;

	      if (!props)
	        return;

	      (function bind(i) {
	        var prop = props[i];
	        if (_this.$data[prop] !== void(0)) {
	          cpnt.$watch(prop, function (value) {
	            _this.$set(prop, value);
	          });
	          _this.$watch(prop, function (value) {
	            cpnt.$set(prop, value);
	          }, false, true);
	        }
	        return i !== 0 && bind(i - 1);
	      }(props.length - 1));
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n  <v-panel-bar v-style=\"\r\n    flex-direction: direction,\r\n    flex-basis: size,\r\n    display: display\">\r\n    <content></content>\r\n  </v-panel-bar>\r\n\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7)
	module.exports.template = __webpack_require__(10)

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    data: function () {
	      return {
	        flex: 1
	      };
	    },
	    replace: true
	  };



/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n  <v-panel-content v-style=\"flex: flex\">\r\n    <content></content>\r\n  </v-panel-content>\r\n\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)
	module.exports.template = __webpack_require__(13)

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	  function resolveAlias(name, alias) {
	    var arr = aliases[name];
	    for (var i = arr.length - 1; i >= 0; i--) {
	      if (alias == arr[i]) return name;
	    }
	  }

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
	    props: ['align-items', 'align-self', 'order', 'direction', 'flex', 'grow', 'shrink', 'basis', 'justify'],
	    data: function () {
	      return {
	        direction: 'row',
	        display: 'flex'
	      };
	    },
	    computed: {
	      parsedAlignSelf: function () {
	        resolveAlias('align-self', this.$data.alignSelf);
	      },
	      parsedAlignItems: function () {
	        resolveAlias('align-items', this.$data.alignItems);
	      },
	      parsedJustifyContent: function () {
	        resolveAlias('align-items', this.$data.justify);
	      }
	    },
	    replace: true
	  };



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n  <v-panel v-style=\"\r\n    display: display,\r\n    align-self: parsedAlignSelf,\r\n    align-items: parsedAlignItems,\r\n    justify-content: parsedJustifyContent,\r\n    order: order,\r\n    flex: flex,\r\n    flex-grow: grow,\r\n    flex-shrink: shrink,\r\n    flex-basis: basis,\r\n    flex-direction: direction\">\r\n    <content></content>\r\n  </v-panel>\r\n\n";

/***/ }
/******/ ])
});
;