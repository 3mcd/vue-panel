describe('plugin', function () {
  var plugin = window.VuePanel;

  it('is available in global namespace', function () {
    expect('object' == typeof plugin).toBe(true);
  });
  
  it('is a valid Vue plugin', function () {
    expect(function () {
      Vue.use(plugin);
    }).not.toThrow();
  });

  it('installs properly', function () {
    expect(['v-panel', 'v-panel-bar', 'v-panel-content'].every(function (x) {
      return typeof Vue.options.components[x] == 'function';
    })).toBe(true);
  });
});