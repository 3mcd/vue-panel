var components = {
  'v-panel-bar': require('./components/panel-bar.vue'),
  'v-panel-content': require('./components/panel-content.vue'),
  'v-panel': require('./components/panel.vue')
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
