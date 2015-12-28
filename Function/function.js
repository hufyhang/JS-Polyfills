/*
 *  ES5 Function Polyfill
 *
 * 2015-12-28
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
( function() {
  // Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
  if (typeof Function.prototype.bind !== 'function') {
    Function.prototype.bind = function bind (thisArg) {
      if (typeof this !== 'function') {
        throw TypeError('Bind must be called on a function');
      }
      var args = Array.prototype.slice.call(arguments, 1);
      var self = this;
      thisArg = thisArg || this;
      return function () {
        return self.apply(thisArg, args);
      };
    };
  }
} )();