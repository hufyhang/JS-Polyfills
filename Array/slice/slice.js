/*
 * Array.prototype.slice Polyfill
 *
 * Mainly used to fix IE's behavior on "slicing" non-native "JScript" objects.
 *
 * 2015-12-27
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
(function () {
  Array.prototype.slice = function slice (begin, end) {
    begin = typeof begin === 'number' ? begin : 0;
    end = typeof end === 'number' ? end : this.length;
    if (end < 0) {
      end = this.length + end;
    }
    var array = [];
    for (var i = begin, l = end; i !== l; ++i) {
      array = array.concat(this[i]);
    }
    return array;
  };
})();
