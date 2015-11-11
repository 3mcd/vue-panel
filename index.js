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

	var modules = [
	  {
	    name: 'v-panel-bar',
	    module: __webpack_require__(4)
	  },
	  {
	    name: 'v-panel-content',
	    module: __webpack_require__(8)
	  },
	  {
	    name: 'v-panel',
	    module: __webpack_require__(11)
	  }
	];

	module.exports = {

	  install: function (Vue, options) {
	    var component;

	    options = options || {};

	    modules.forEach(function (spec) {
	      var component = spec.module;

	      component.mixins = component.mixins || [];

	      component.mixins.push({
	        data: function () {
	          return Object.assign({}, options[spec.name] || options[Vue.util.camelize(spec.name)]);
	        }
	      });

	      Vue.component(spec.name, component);
	    });
	  }

	};


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(7)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-bar.vue"], function () {
	var newOptions = require("-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-bar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	  data: function data() {
	    return {
	      style: {}
	    };
	  },

	  computed: {

	    parsedAlignItems: function parsedAlignItems() {
	      return resolveAlias('align-items', this.$data.alignItems);
	    },

	    parsedJustifyContent: function parsedJustifyContent() {
	      return resolveAlias('align-items', this.$data.justify);
	    },

	    _style: function _style() {
	      return {
	        'align-items': this.parsedAlignItems,
	        'display': this.display,
	        'flex-basis': this.size,
	        'flex-direction': this.direction,
	        'flex-shrink': this.shrink,
	        'justify-content': this.parsedJustifyContent
	      };
	    }

	  },

	  watch: {
	    direction: function direction() {
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

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(10)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-content.vue"], function () {
	var newOptions = require("-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-content.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

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

	  data: function data() {
	    return {
	      style: {}
	    };
	  },

	  computed: {
	    _style: function _style() {
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

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(13)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel.vue"], function () {
	var newOptions = require("-!babel?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	  data: function data() {
	    return {
	      style: {}
	    };
	  },

	  computed: {

	    parsedAlignSelf: function parsedAlignSelf() {
	      return resolveAlias('align-self', this.$data.alignSelf);
	    },

	    parsedAlignItems: function parsedAlignItems() {
	      return resolveAlias('align-items', this.$data.alignItems);
	    },

	    parsedJustifyContent: function parsedJustifyContent() {
	      return resolveAlias('align-items', this.$data.justify);
	    },

	    _style: function _style() {
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