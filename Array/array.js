/*
 *  ES5 Array Polyfill
 *
 * 2015-12-28
 *
 * By Feifei Hang, http://feifeihang.info
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
'use strict';
(function () {
  // Array.isArray(obj)
  if (typeof Array.isArray !== 'function') {
    Array.isArray = function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  // Array.prototype.indexOf(searchElement[, fromIndex = 0])
  if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function indexOf(searchElement, fromIndex) {
      if (this === null || this === undefined) {
        throw TypeError(this + ' is null or not defined');
      }
      if (arguments.length === 0) {
        return -1;
      }
      fromIndex = typeof fromIndex === 'number' ? fromIndex : 0;
      var i, l = this.length;
      // If fromIndex is a positive number.
      if (fromIndex >= 0) {
        if (l - 1 < fromIndex) {
          return -1;
        }
        for (i = fromIndex; i !== l; ++i) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      }
      // If fromIndex is a negative number.
      else {
        for (i = l + fromIndex; i !== l; ++i) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      }
      return -1;
    };
  }

  // Array.prorotype.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
  if (typeof Array.prototype.lastIndexOf !== 'function') {
    Array.prototype.lastIndexOf = function lastIndexOf(searchElement, fromIndex) {
      if (this === null || this === undefined) {
        throw TypeError(this + ' is null or not defined');
      }
      if (arguments.length === 0) {
        return -1;
      }
      fromIndex = typeof fromIndex === 'number' ? fromIndex : this.length - 1;
      if (fromIndex >= this.length) {
        fromIndex = this.length - 1;
      }
      var i;
      if (fromIndex > 0) {
        for (i = fromIndex; i !== -1; --i) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      }
      else {
        for (i = this.length + fromIndex; i !== -1; --i) {
          if (this[i] === searchElement) {
            return i;
          }
        }
      }
      return -1;
    };
  }

  // Array.prototype.every(callback[, thisArg])
  if (typeof Array.prototype.every !== 'function') {
    Array.prototype.every = function every(callback, thisArg) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      thisArg = typeof thisArg === 'object' ? thisArg : this;
      for (var i = 0, l = this.length; i !== l; ++i) {
        if (callback.call(thisArg, this[i], i, this) === false) {
          return false;
        }
      }
      return true;
    };
  }

  // Array.prototype.some(callback[, thisArg])
  if (typeof Array.prototype.some !== 'function') {
    Array.prototype.some = function some(callback, thisArg) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      thisArg = typeof thisArg === 'object' ? thisArg : this;
      for (var i = 0, l = this.length; i !== l; ++i) {
        if (callback.call(thisArg, this[i], i, this) === true) {
          return true;
        }
      }
      return false;
    };
  }

  // Array.prototype.forEach(callback[, thisArg])
  if (typeof Array.prototype.forEach !== 'function') {
    Array.prototype.forEach = function forEach (callback, thisArg) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      thisArg = typeof thisArg === 'object' ? thisArg : this;
      for (var i = 0, l = this.length; i !== l; ++i) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

})();