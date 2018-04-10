// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Require lodash
window._ = require('lodash');

// Require jquery and jquery ui
window.jQuery = require('jquery');
window.$ = window.jQuery;
window.$ = $.extend(require('jquery-ui-dist/jquery-ui.js'))

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false

// Globally handle events
window.Event = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
