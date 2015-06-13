var $stage = document.querySelector('#stage');
var $main = document.querySelector('#main');

describe('<v-panel/>', function () {
  Vue.use(VuePanel);

  var VPanel = Vue.component('v-panel'),
      cpnt = new VPanel(),
      style,
      makeExpectStyleEqual;

  beforeAll(function () {
    cpnt.$mount($main)
    style = cpnt.$el.style;
    makeExpectStyleEqual = expectEqualBuilder(expect, style);
  });
    
  it('is a valid Vue component', function () {
    expect(typeof cpnt).toBe('object');
  });

  describe('init', function () {
    it('mounts properly', function () {
      expect(cpnt.$el).toEqual($stage.children[0]);
    });

    it('replaces parent element', function () {
      expect($main).not.toEqual($stage.children[0]);
    });
  });

  describe('style', function () {
    it('translates `$data.grow` to flex-grow', function (done) {
      cpnt.grow = 1;
      nextTick(makeExpectStyleEqual('flexGrow', '1')).then(done);
    });

    it('translates `$data.shrink` to flex-shrink', function (done) {
      cpnt.shrink = 1;
      nextTick(makeExpectStyleEqual('flexShrink', '1')).then(done);
    });

    it('translates `$data.direction` to flex-direction', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'direction', 'column'))
        .then(makeExpectStyleEqual('flexDirection', 'column'))
        .then(done);
    });

    it('translates `$data.align-items` (alignItems) to align-items', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'alignItems', 'flex-start'))
        .then(makeExpectStyleEqual('alignItems', 'flex-start'))
        .then(done);
    });

    it('translates `$data.align-self` (alignSelf) to align-self', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'alignSelf', 'flex-start'))
        .then(makeExpectStyleEqual('alignSelf', 'flex-start'))
        .then(done);
    });

    it('translates `$data.justify` to justify-content', function (done) {
      nextTick()
        .then(makeAwaitSet(cpnt, 'justify', 'flex-start'))
        .then(makeExpectStyleEqual('justifyContent', 'flex-start'))
        .then(done);
    });

    it('translates `$data.basis` to flex-basis', function (done) {
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