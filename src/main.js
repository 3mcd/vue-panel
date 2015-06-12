var components = {
  'v-panel-bar': require('./components/panel-bar.vue'),
  'v-panel-content': require('./components/panel-content.vue'),
  'v-panel': require('./components/panel.vue')
};

module.exports = {
  install: function (Vue) {
    for (var prop in components) {
      Vue.component(prop, panels[prop]);
    }
  }
};