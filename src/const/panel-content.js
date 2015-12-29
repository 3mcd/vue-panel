var spec = {
	props: {
    flex: String,
    grow: {
      type: String,
      default: 1
    },
    shrink: String,
    basis: {
      default: 0
    }
  }
};

spec.params = Object.keys(spec.props);
spec.defaults = spec.params.reduce(function (a, x) {
	var def = spec.props[x].default;
	if (def)
		a[x] = def;	
	return a;
}, {});

module.exports = spec;