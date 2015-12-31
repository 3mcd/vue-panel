var resolveAlias = require('../resolveAlias');

var spec = {		
	props: {
    alignItems: {
      type: String,
      default: 'stretch'
    },
    direction: {
      type: String,
      default: 'row'
    },
    display: {
      type: String,
      default: 'flex'
    },
    justify: String,
    shrink: {
      type: String,
      default: 0
    },
    size: {
      type: String,
      default: '30px'
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