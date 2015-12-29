window._ = {
  context: function (obj, stage) {
    return new TestContext(obj, stage);
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

var TestContext = function (spec, stage) {
  this.spec = spec;
  this.$stage = document.querySelector(stage);
  this.reload.bind(this);
  this.unload.bind(this);
  this.reload(); 
};

TestContext.prototype.reload = function (spec) {
  this.spec = spec || this.spec;

  this.$main = this.$stage.appendChild(document.createElement('div'));
  this.component = this.spec instanceof Function ?
    new this.spec({ el: this.$main }) :
    new Vue({ el: this.$main, template: '<div ' + this.spec + '></div>' });
  this.style = this.component.$el.style;
};

TestContext.prototype.unload = function () {
  this.$stage.innerHTML = '';
  if (!this.component || !this.component.$el)
    return;
  this.component.$remove();
  this.component.$destroy();
};
