var resolveAlias = require('../resolveAlias');

var spec = {		
  props: {
    alignItems: String,
    alignSelf: String,
    basis: null,
    direction: String,
    display: {
      type: String,
      default: 'flex'
    },
    flex: String,
    grow: String,
    justify: String,
    order: String,
    shrink: String
  }
};

spec.params = Object.keys(spec.props);
spec.defaults = spec.params.reduce(function (a, x) {
	var def = spec.props[x] && spec.props[x].default;
	if (def)
		a[x] = def;	
	return a;
}, {});

module.exports = spec;