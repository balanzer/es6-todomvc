/* global app, $on */
(function(window) {
  'use strict'
  log('app loading...23');
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
