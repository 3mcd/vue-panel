var components = require('./components'),
    directives = require('./directives');

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
