describe('<v-panel/>', function () {
  Vue.use(VuePanel);

  var $stage = document.querySelector('#panel');
  var $main = document.querySelector('#panel .render');

  var VPanel = Vue.component('v-panel'),
      cpnt = new VPanel(),
      style,
      makeExpectStyleEqual;

  beforeAll(function () {
    cpnt.$mount($main);
    style = cpnt.$el.style;
    makeExpectStyleEqual = _.expectEqualBuilder(expect, style);
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
    it('translates `$data.align-items` (alignItems) to align-items', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'alignItems', 'flex-start'))
        .then(makeExpectStyleEqual('alignItems', 'flex-start'))
        .then(done);
    });

    it('translates `$data.align-self` (alignSelf) to align-self', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'alignSelf', 'flex-start'))
        .then(makeExpectStyleEqual('alignSelf', 'flex-start'))
        .then(done);
    });

    it('translates `$data.basis` to flex-basis', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'basis', '100px'))
        .then(makeExpectStyleEqual('flexBasis', '100px'))
        .then(done);
    });

    it('translates `$data.direction` to flex-direction', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'direction', 'column'))
        .then(makeExpectStyleEqual('flexDirection', 'column'))
        .then(done);
    });

    it('translates `$data.grow` to flex-grow', function (done) {
      cpnt.grow = 1;
      _.nextTick(makeExpectStyleEqual('flexGrow', '1')).then(done);
    });

    it('translates `$data.justify` to justify-content', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'justify', 'flex-start'))
        .then(makeExpectStyleEqual('justifyContent', 'flex-start'))
        .then(done);
    });

    it('translates `$data.shrink` to flex-shrink', function (done) {
      cpnt.shrink = 1;
      _.nextTick(makeExpectStyleEqual('flexShrink', '1')).then(done);
    });
  });
});