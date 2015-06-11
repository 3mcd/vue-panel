var Vue = require('vue');

var app = new Vue(require('./components/app.vue'))
  .$mount('[data-region=app]');