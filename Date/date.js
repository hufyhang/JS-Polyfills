/*
 *  ES5 Date Polyfill
 *
 * 2015-12-28
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
(function () {
  // Date.now()
  if (typeof Date.now !== 'function') {
    Date.now = function now() {
      return Number(new Date());
    };
  }
})();