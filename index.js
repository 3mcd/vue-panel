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

	var components = __webpack_require__(4),
	    directives = __webpack_require__(18);

	module.exports = {

	  install: function (Vue, options) {
	    var component;

	    options = options || {};

	    components.forEach(function (spec) {
	      var component = spec.module;

	      component.mixins = component.mixins || [];

	      component.mixins.push({
	        data: function () {
	          return Object.assign({}, options[spec.name] || options[Vue.util.camelize(spec.name)]);
	        }
	      });

	      Vue.component(spec.name, component);
	    });

	    directives.forEach(function (spec) {
	      Vue.directive(spec.name, spec.module);
	    });
	  }

	};


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  {
	    name: 'v-panel-bar',
	    module: __webpack_require__(5)
	  },
	  {
	    name: 'v-panel-content',
	    module: __webpack_require__(10)
	  },
	  {
	    name: 'v-panel',
	    module: __webpack_require__(14)
	  }
	];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(9)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-bar.vue"], function () {
	var newOptions = require("-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-bar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-bar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>
	//   <div :class="class" :style="[_style, style]">
	//     <slot></slot>
	//   </div>
	// </template>

	// <script>
	var resolveValue = __webpack_require__(7).value,
	    spec = __webpack_require__(8);

	module.exports = {

	  props: spec.props,

	  data: function data() {
	    return {
	      style: {}
	    };
	  },

	  computed: {

	    parsedAlignItems: function parsedAlignItems() {
	      return resolveValue('align-items', this.$data.alignItems);
	    },

	    parsedJustifyContent: function parsedJustifyContent() {
	      return resolveValue('align-items', this.$data.justify);
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
	// </script>

/***/ },
/* 7 */
/***/ function(module, exports) {

	var commonValueAliases = {
	  'flex-start': ['start'],
	  'flex-end': ['end']
	};

	var valueAliases = {
	  'align-items': commonValueAliases,
	  'align-self': commonValueAliases,
	  'justify-content': commonValueAliases
	};

	var propertyAliases = {
	  'flex-grow': ['grow'],
	  'flex-shrink': ['shrink'],
	  'flex-basis': ['basis', 'size'],
	  'align-items': ['alignItems'],
	  'align-self': ['alignSelf'],
	  'flex-direction': ['direction'],
	  'justify-content': ['justify']
	};

	function resolvePropertyAlias(name) {
	  for (var prop in propertyAliases) {
	    if (propertyAliases[prop].indexOf(name) > -1) {
	      return prop;
	    }
	  }
	  return name;
	}

	function resolveValueAlias(name, value) {
	  var spec = valueAliases[name],
	      arr, i;

	  for (var prop in spec) {
	    arr = spec[prop];
	    for (i = arr.length - 1; i >= 0; i--) {
	      if (value == arr[i]) return prop;
	    }
	  }

	  return value;
	};

	module.exports = {
	  property: resolvePropertyAlias,
	  value: resolveValueAlias
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var resolveAlias = __webpack_require__(7);

	var spec = {		
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
		}
	};

	spec.params = Object.keys(spec.props);
	spec.defaults = spec.params.reduce(function (a, x) {
		var def = spec.props[x].default;
		if (def)
			a[x] = def;	
		return a;
	}, {});

	module.exports = spec;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\n    <slot></slot>\n  </div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(13)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-content.vue"], function () {
	var newOptions = require("-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel-content.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel-content.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>
	//   <div :class="class" :style="[_style, style]">
	//     <slot></slot>
	//   </div>
	// </template>

	// <script>
	var spec = __webpack_require__(12);

	module.exports = {

	  props: spec.props,

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
	// </script>

/***/ },
/* 12 */
/***/ function(module, exports) {

	var spec = {
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
	  }
	};

	spec.params = Object.keys(spec.props);
	spec.defaults = spec.params.reduce(function (a, x) {
		var def = spec.props[x].default;
		if (def)
			a[x] = def;	
		return a;
	}, {});

	module.exports = spec;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\n    <slot></slot>\n  </div>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(17)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel.vue"], function () {
	var newOptions = require("-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>
	//   <div :class="class" :style="[_style, style]">
	//     <slot></slot>
	//   </div>
	// </template>

	// <script>
	var resolveValue = __webpack_require__(7).value,
	    spec = __webpack_require__(16);

	module.exports = {

	  props: spec.props,

	  data: function data() {
	    return {
	      style: {}
	    };
	  },

	  computed: {

	    parsedAlignSelf: function parsedAlignSelf() {
	      return resolveValue('align-self', this.$data.alignSelf);
	    },

	    parsedAlignItems: function parsedAlignItems() {
	      return resolveValue('align-items', this.$data.alignItems);
	    },

	    parsedJustifyContent: function parsedJustifyContent() {
	      return resolveValue('align-items', this.$data.justify);
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
	// </script>

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var resolveAlias = __webpack_require__(7);

	var spec = {		
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
	  }
	};

	spec.params = Object.keys(spec.props);
	spec.defaults = spec.params.reduce(function (a, x) {
		var def = spec.props[x] && spec.props[x].default;
		if (def)
			a[x] = def;	
		return a;
	}, {});

	module.exports = spec;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"class\" :style=\"[_style, style]\">\n    <slot></slot>\n  </div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var directive = __webpack_require__(19);

	module.exports = [
	  {
	    name: 'panel',
	    module: directive(__webpack_require__(16)) 
	  },
	  {
	    name: 'panel-bar',
	    module: directive(__webpack_require__(8))
	  },
	  {
	  	name: 'panel-content',
	  	module: directive(__webpack_require__(12))
	  }
	];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var applyStyleSingle = __webpack_require__(20).applyStyleSingle,
			resolveAlias = __webpack_require__(7),
	    spec = __webpack_require__(8);
	    
	function buildParamWatchers(params) {
		return params.reduce(function (a, x) {
			a[x] = function (val) {
				applyStyleSingle(this.el, resolveAlias.property(x), val);
			};
			return a;
		}, Object.create(null));
	}

	module.exports = function (spec) {
		return {
		  params: spec.params,

		  bind: function () {
		    var _this = this;
		    var params = Object.keys(this.params);

		    for (var prop in spec.defaults) {
					this.el.style.setProperty(
		    		resolveAlias.property(prop),
		    		resolveAlias.value(prop, spec.defaults[prop])
		    	);
		    }	

		    for (var watcher in this.paramWatchers) {
		      this.paramWatchers[watcher] = this.paramWatchers[watcher].bind(this);
		    }

		    params.forEach(function (param) {
		      _this.paramWatchers[param](_this.params[param]);
		    });
		  },

		  paramWatchers: buildParamWatchers(spec.params)
		};
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	const prefixes = ['-webkit-', '-moz-', '-ms-']
	const camelPrefixes = ['Webkit', 'Moz', 'ms']
	const importantRE = /!important;?$/
	const propCache = Object.create(null);
	const camelizeRE = /-(\w)/g;
	const hyphenateRE = /([a-z\d])([A-Z])/g;

	var testEl;

	function toUpper (_, c) {
	  return c ? c.toUpperCase() : '';
	}

	function camelize (str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function hyphenate (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase();
	}

	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	function prefix (prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}

	function handleSingle (el, prop, value) {
	  prop = normalize(prop);
	  if (!prop) return;
	  if (value != null) value += '';
	  if (value) {
	    var isImportant = importantRE.test(value)
	      ? 'important'
	      : '';
	    if (isImportant) {
	      value = value.replace(importantRE, '').trim();
	    }
	    el.style.setProperty(prop, value, isImportant);
	  } else {
	    el.style.removeProperty(prop);
	  }
	}

	module.exports = {
		prefix: prefix,
		normalize: normalize,
		applyStyleSingle: handleSingle
	};

/***/ }
/******/ ])
});
;