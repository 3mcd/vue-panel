window._ = {
  context: function (component, stage) {
    return new TestContext(component, stage);
  },

  makeExpectEqualDeferred: function expectEqualBuilder(expect, obj) {
    return function (prop, value) {
      return function () {
        return expect(obj[prop]).toEqual(value);
      };
    };
  },

  nextTickSet: function nextTickSet(cpnt, prop, value) {
    var _this = this;
    return function () {
      cpnt[prop] = value;
      return _this.nextTick();
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

var TestContext = function (component, stage) {
  this.Ctor = component instanceof Function ? component : Vue.component(component);
  this.$stage = document.querySelector(stage);
  this.reload();
};

TestContext.prototype.reload = function () {
  this.$main = this.$stage.appendChild(document.createElement('div'));
  this.component = new this.Ctor({ el: this.$main });
  this.style = this.component.$el.style;
};

TestContext.prototype.unload = function () {
  if (!this.component)
    return;
  this.component.$remove();
  this.component.$destroy();
};
