describe('<... v-panel/>', function () {
  Vue.use(VuePanel);

  var ctx = _.context('v-panel', '#panel');
  var expectEqualDeferred;

  afterEach(function () { ctx.unload(); });

  describe('style', function () {
    expectEqualDeferred = _.makeExpectEqualDeferred(expect, ctx.style);

    it('translates prop `grow` to flex-grow', function (done) {
    	ctx.reload('v-panel grow="2"');
      _.nextTick()
        .then(expectEqualDeferred('flex-grow', '2'))
        .then(done);
    });

    it('translates prop `shrink` to flex-shrink', function (done) {
    	ctx.reload('v-panel shrink="3"');
      _.nextTick()
        .then(expectEqualDeferred('flex-shrink', '3'))
        .then(done);
    });
	});
});