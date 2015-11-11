var components = {
  'v-panel-bar': require('./components/panel-bar.vue'),
  'v-panel-content': require('./components/panel-content.vue'),
  'v-panel': require('./components/panel.vue')
};

var modules = [
  {
    name: 'v-panel-bar',
    module: require('./components/panel-bar.vue')
  },
  {
    name: 'v-panel-content',
    module: require('./components/panel-content.vue')
  },
  {
    name: 'v-panel',
    module: require('./components/panel.vue')
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
