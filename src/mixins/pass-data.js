module.exports = {
  ready: function () {
    for (var i = this._transCpnts.length - 1; i >= 0; i--) {
      this.bindData(this._transCpnts[i]);
    }
  },
  methods: {
    bindData: function (cpnt) {
      var _this = this;
      var props = cpnt.$options.props;

      if (!props)
        return;

      (function bind(i) {
        var prop = props[i];
        if (_this.$data[prop] !== void(0)) {
          cpnt.$watch(prop, function (value) {
            _this.$set(prop, value);
          });
          _this.$watch(prop, function (value) {
            cpnt.$set(prop, value);
          }, false, true);
        }
        return i !== 0 && bind(i - 1);
      }(props.length - 1));
    }
  }
};