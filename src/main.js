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

      component.mixins = component.mixins || [];

      ;(function (config) {
        component.mixins.push({
          data: function () {
            return config;
          }
        });
      }(options[prop] || options[Vue.util.camelize(prop)]));

      Vue.component(prop, component);
    }
  }
};
