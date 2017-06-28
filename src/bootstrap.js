/* global app, $on */
(function(window) {
  'use strict'
  log('app loading...');
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
