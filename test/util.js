window._ = {
  expectEqualBuilder: function expectEqualBuilder(expect, obj) {
    return function (prop, value) {
      return function () {
        return expect(obj[prop]).toEqual(value);
      };
    };
  },

  makeAwaitSet: function makeAwaitSet(cpnt, prop, value) {
    return function () {
      cpnt[prop] = value;
      return new Promise(function (resolve) {
        Vue.nextTick(resolve);
      });
    };
  },

  nextTick: function nextTick(cb) {
    return new Promise(function (resolve) {
      Vue.nextTick(function () {
        resolve();
      });
    }).then(cb);
  }
};