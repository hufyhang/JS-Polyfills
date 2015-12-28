/*
 *  ES5 String Polyfill
 *
 * 2015-12-28
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
( function() {
// String.prototype.trim()
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function trim() {
    if (this.length === 0) {
      return this;
    }
    return this.replace(/^\s+|\s+$/g, '');
  };
}
} )();