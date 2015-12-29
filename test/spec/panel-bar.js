describe('<v-panel-bar/>', function () {
  Vue.use(VuePanel);

  var ctx = _.context(Vue.component('v-panel-bar'), '#panel-bar');
  var expectEqualDeferred;

  beforeEach(function () {
    ctx.reload();
    expectEqualDeferred = _.makeExpectEqualDeferred(expect, ctx.style);
  });

  afterEach(function () { ctx.unload(); });

  it('is a valid Vue component', function () {
    expect(typeof ctx.component).toBe('object');
  });

  describe('init', function () {
    it('replaces parent element', function () {
      expect(ctx.$main).not.toEqual(ctx.$stage.children[0]);
    });
  });

  describe('style', function () {
    it('doesn\'t shrink by default', function (done) {
      _.nextTick(expectEqualDeferred('flexShrink', '0')).then(done);
    });

    it('translates `$data.direction` to flex-direction', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'direction', 'column'))
        .then(expectEqualDeferred('flexDirection', 'column'))
        .then(done);
    });

    it('translates `$data.size` to flex-basis', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'size', '100px'))
        .then(expectEqualDeferred('flexBasis', '100px'))
        .then(done);
    });
  });

  describe('data', function () {
    it('broadcasts an event to child components when `$data.direction` changes', function (done) {
      var result;

      var child = new Vue({
        parent: ctx.component,
        events: {
          'v-panel-bar:direction': function (value) {
            result = value;
          }
        }
      });

      ctx.component.direction = 'column';

      _.nextTick()
        .then(function () {
          expect(result).toEqual(ctx.component.direction);
        })
        .then(done);
    });
  });
});
