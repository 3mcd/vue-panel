describe('<v-panel/>', function () {
  Vue.use(VuePanel);

  var ctx = _.context(Vue.component('v-panel'), '#panel');
  var expectEqualDeferred;

  beforeEach(function () {
    ctx.reload();
    expectEqualDeferred = _.makeExpectEqualDeferred(expect, ctx.style);
  });

  afterEach(function () {
    ctx.unload.call(ctx);
  });

  it('is a valid Vue component', function () {
    expect(typeof ctx.component).toBe('object');
  });

  describe('init', function () {
    it('replaces parent element', function () {
      expect(ctx.$main).not.toEqual(ctx.$stage.children[0]);
    });
  });

  describe('style', function () {
    it('translates `$data.align-items` (alignItems) to align-items', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'alignItems', 'flex-start'))
        .then(expectEqualDeferred('alignItems', 'flex-start'))
        // Aliases
        .then(_.nextTickSet(ctx.component, 'alignItems', 'end'))
        .then(expectEqualDeferred('alignItems', 'flex-end'))
        .then(_.nextTickSet(ctx.component, 'alignItems', 'start'))
        .then(expectEqualDeferred('alignItems', 'flex-start'))
        .then(done);
    });

    it('translates `$data.align-self` (alignSelf) to align-self', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'alignSelf', 'flex-start'))
        .then(expectEqualDeferred('alignSelf', 'flex-start'))
        // Aliases
        .then(_.nextTickSet(ctx.component, 'alignSelf', 'end'))
        .then(expectEqualDeferred('alignSelf', 'flex-end'))
        .then(_.nextTickSet(ctx.component, 'alignSelf', 'start'))
        .then(expectEqualDeferred('alignSelf', 'flex-start'))
        .then(done);
    });

    it('translates `$data.basis` to flex-basis', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'basis', '100px'))
        .then(expectEqualDeferred('flexBasis', '100px'))
        .then(done);
    });

    it('translates `$data.direction` to flex-direction', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'direction', 'column'))
        .then(expectEqualDeferred('flexDirection', 'column'))
        .then(done);
    });

    it('translates `$data.flex` to flex', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'flex', '1 0 100%'))
        .then(expectEqualDeferred('flex', '1 0 100%'))
        .then(done);
    });

    it('translates `$data.grow` to flex-grow', function (done) {
      ctx.component.grow = 1;
      _.nextTick(expectEqualDeferred('flexGrow', '1')).then(done);
    });

    it('translates `$data.justify` to justify-content', function (done) {
      _.nextTick()
        .then(_.nextTickSet(ctx.component, 'justify', 'flex-start'))
        .then(expectEqualDeferred('justifyContent', 'flex-start'))
        // Aliases
        .then(_.nextTickSet(ctx.component, 'justify', 'end'))
        .then(expectEqualDeferred('justifyContent', 'flex-end'))
        .then(_.nextTickSet(ctx.component, 'justify', 'start'))
        .then(expectEqualDeferred('justifyContent', 'flex-start'))
        .then(done);
    });

    it('translates `$data.shrink` to flex-shrink', function (done) {
      ctx.component.shrink = 1;
      _.nextTick(expectEqualDeferred('flexShrink', '1')).then(done);
    });
  });
});
