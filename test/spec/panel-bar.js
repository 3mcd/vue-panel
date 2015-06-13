describe('<v-panel-bar/>', function () {
  
  Vue.use(VuePanel);

  var $stage = document.querySelector('#panel-bar');
  var $main = document.querySelector('#panel-bar .render');
  
  var VPanel = Vue.component('v-panel-bar'),
      cpnt = new VPanel(),
      style,
      makeExpectStyleEqual;

  beforeAll(function () {
    cpnt.$mount($main)
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
    it('doesn\'t shrink by default', function (done) {
      _.nextTick(makeExpectStyleEqual('flexShrink', '0')).then(done);
    });

    it('translates `$data.direction` to flex-direction', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'direction', 'column'))
        .then(makeExpectStyleEqual('flexDirection', 'column'))
        .then(done);
    });

    it('translates `$data.size` to flex-basis', function (done) {
      _.nextTick()
        .then(_.makeAwaitSet(cpnt, 'size', '100px'))
        .then(makeExpectStyleEqual('flexBasis', '100px'))
        .then(done);
    });
  });
});