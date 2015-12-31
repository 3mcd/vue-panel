var directive = require('./directive');

module.exports = [
  {
    name: 'panel',
    module: directive(require('../const/panel')) 
  },
  {
    name: 'panel-bar',
    module: directive(require('../const/panel-bar'))
  },
  {
    name: 'panel-content',
    module: directive(require('../const/panel-content'))
  }
];