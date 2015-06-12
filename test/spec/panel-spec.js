var $stage = document.querySelector('#stage');
var $main = document.querySelector('#main');

describe('vue-panel', function () {
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

describe('<v-panel/>', function () {
  Vue.use(VuePanel);

  var VPanel = Vue.component('v-panel'),
      cpnt = new VPanel(),
      style,
      makeExpectStyleEqual;
    
  it('is a valid Vue component', function () {
    expect(typeof cpnt).toBe('object');
  });

  describe('init', function () {
    it('mounts properly', function () {
      expect(function () {
        cpnt.$mount($main);
      }).not.toThrow();
      style = cpnt.$el.style;
      makeExpectStyleEqual = expectEqualBuilder(expect, cpnt.$el.style);
    });

    it('replaces parent element', function () {
      expect($main).not.toEqual($stage.children[0]);
    });
  });

  describe('style', function () {
    it('should translate `$data.grow` to flex-grow', function (done) {
      cpnt.grow = 1;
      nextTick(makeExpectStyleEqual('flexGrow', '1')).then(done);
    });

    it('should translate `$data.shrink` to flex-shrink', function (done) {
      cpnt.shrink = 1;
      nextTick(makeExpectStyleEqual('flexShrink', '1')).then(done);
    });

    it('should translate `$data.direction` to flex-direction', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'direction', 'column'))
        .then(makeExpectStyleEqual('flexDirection', 'column'))
        .then(done);
    });

    it('should translate `$data.align-items` (alignItems) to align-items', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'alignItems', 'flex-start'))
        .then(makeExpectStyleEqual('alignItems', 'flex-start'))
        .then(done);
    });

    it('should translate `$data.align-self` (alignSelf) to align-self', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'alignSelf', 'flex-start'))
        .then(makeExpectStyleEqual('alignSelf', 'flex-start'))
        .then(done);
    });

    it('should translate `$data.justify` to justify-content', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'justify', 'flex-start'))
        .then(makeExpectStyleEqual('justifyContent', 'flex-start'))
        .then(done);
    });

    it('should translate `$data.basis` to flex-basis', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'basis', '100px'))
        .then(makeExpectStyleEqual('flexBasis', '100px'))
        .then(done);
    });
  });
});

function expectEqualBuilder(expect, obj) {
  return function (prop, value) {
    return function () {
      return expect(obj[prop]).toEqual(value);
    };
  };
}

function makeAwaitSet(cpnt, prop, value) {
  return function () {
    cpnt[prop] = value;
    return new Promise(function (resolve) {
      Vue.nextTick(resolve);
    });
  };
}

function nextTick(cb) {
  return new Promise(function (resolve) {
    Vue.nextTick(function () {
      resolve();
    });
  }).then(cb);
}