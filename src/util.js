const prefixes = ['-webkit-', '-moz-', '-ms-']
const camelPrefixes = ['Webkit', 'Moz', 'ms']
const importantRE = /!important;?$/
const propCache = Object.create(null);
const camelizeRE = /-(\w)/g;
const hyphenateRE = /([a-z\d])([A-Z])/g;

var testEl;

function toUpper (_, c) {
  return c ? c.toUpperCase() : '';
}

function camelize (str) {
  return str.replace(camelizeRE, toUpper);
}

function hyphenate (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}

function normalize (prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

function prefix (prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  if (camel in testEl.style) {
    return prop;
  }
  var i = prefixes.length;
  var prefixed;
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixes[i] + prop;
    }
  }
}

function handleSingle (el, prop, value) {
  prop = normalize(prop);
  if (!prop) return;
  if (value != null) value += '';
  if (value) {
    var isImportant = importantRE.test(value)
      ? 'important'
      : '';
    if (isImportant) {
      value = value.replace(importantRE, '').trim();
    }
    el.style.setProperty(prop, value, isImportant);
  } else {
    el.style.removeProperty(prop);
  }
}

module.exports = {
	prefix: prefix,
	normalize: normalize,
	applyStyleSingle: handleSingle
};