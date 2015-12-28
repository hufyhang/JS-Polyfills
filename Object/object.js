/*
 *  ES5 Object Polyfill
 *
 * 2015-12-28
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
(function () {
  // Object.getPrototypeOf(o)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
  if (typeof Object.getPrototypeOf !== 'function') {
    Object.getPrototypeOf = function getPrototypeOf (o) {
      // Follow ES6 spec here.
      // Force `o` to be an object.
      o = Object(o);
      return o.__proto__ || o.constructor.prototype || Object.prototype;
    };
  }



})();