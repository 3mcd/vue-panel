var applyStyleSingle = require('../util').applyStyleSingle,
    resolveAlias = require('../resolveAlias'),
    spec = require('../const/panel-bar');
    
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