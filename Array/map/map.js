/*
 * Array.prototype.map Polyfill
 *
 * 2015-12-27
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
(function () {
  if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function map (callback, thisArg) {
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      thisArg = thisArg || this;
      if (Object.prototype.toString.call(thisArg) !== '[object Array]') {
        throw new TypeError(thisArg + ' is not an array');
      }
      var array = [];
      for (var i = 0, l = this.length; i !== l; ++i) {
        array = array.concat(callback.call(thisArg, this[i], i, this));
      }
      return array;
    };
  }
})();
