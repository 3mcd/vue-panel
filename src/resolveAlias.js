var commonValueAliases = {
  'flex-start': ['start'],
  'flex-end': ['end']
};

var valueAliases = {
  'align-items': commonValueAliases,
  'align-self': commonValueAliases,
  'justify-content': commonValueAliases
};

var propertyAliases = {
  'flex-grow': ['grow'],
  'flex-shrink': ['shrink'],
  'flex-basis': ['basis', 'size'],
  'align-items': ['alignItems'],
  'align-self': ['alignSelf'],
  'flex-direction': ['direction'],
  'justify-content': ['justify']
};

function resolvePropertyAlias(name) {
  for (var prop in propertyAliases) {
    if (propertyAliases[prop].indexOf(name) > -1) {
      return prop;
    }
  }
  return name;
}

function resolveValueAlias(name, value) {
  var spec = valueAliases[name],
      arr, i;

  for (var prop in spec) {
    arr = spec[prop];
    for (i = arr.length - 1; i >= 0; i--) {
      if (value == arr[i]) return prop;
    }
  }

  return value;
};

module.exports = {
  property: resolvePropertyAlias,
  value: resolveValueAlias
};