var common = {
  'flex-start': ['start'],
  'flex-end': ['end']
};

var aliases = {
  'align-items': common,
  'align-self': common,
  'justify-content': common
};

module.exports = function resolveAlias(name, value) {
  var spec = aliases[name],
      arr, i;

  for (var prop in spec) {
    arr = spec[prop];
    for (i = arr.length - 1; i >= 0; i--) {
      if (value == arr[i]) return prop;
    }
  }

  return value;
};
