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

  // Array.prototype.map(callback[, thisArg])
  if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function map (callback, thisArg) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      thisArg = typeof thisArg === 'object' ? thisArg : this;
      var array = [];
      for (var i = 0, l = this.length; i !== l; ++i) {
        array = array.concat(callback.call(thisArg, this[i], i, this));
      }
      return array;
    };
  }

  // Array.prototype.filter(callback[, thisArg])
  if (typeof Array.prototype.filter !== 'function') {
    Array.prototype.filter = function filter(callback, thisArg) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      thisArg = typeof thisArg === 'object' ? thisArg : this;
      var array = [];
      for (var i = 0, l = this.length; i !== l; ++i) {
        if (callback.call(thisArg, this[i], i, this) === true) {
          array = array.concat(this[i]);
        }
      }
      return array;
    };
  }

  // Array.prototype.slice([begin[, end]])
  // This is mainly to correct the slice funtion in IE.
  Array.prototype.slice = function slice (begin, end) {
    if (this === null || this === undefined) {
      throw TypeError('this is null or undefined');
    }
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

  // Array.prototype.reduce(callback[, initialValue])
  if (typeof Array.prototype.reduce !== 'function') {
    Array.prototype.reduce = function reduce(callback, initialValue) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      var current, prev;
      var i = 0, l = arguments.length;
      if (l === 1) {
        prev = this[0];
        current = this[1];
        i = 1;
      }
      else if (l > 1) {
        prev = initialValue;
        current = this[0];
      }
      l = this.length;
      for (; i !== l; ++i) {
        prev = callback(prev, current, i, this);
        current = this[i + 1];
      }
      return prev;
    };
  }

  // Array.prototype.reduceRight(callback[, initialValue])
  if (typeof Array.prototype.reduceRight !== 'function') {
    Array.prototype.reduceRight = function reduceRight(callback, initialValue) {
      if (this === null || this === undefined) {
        throw TypeError('this is null or undefined');
      }
      if (typeof callback !== 'function') {
        throw TypeError(callback + ' is not a function');
      }
      var current, prev;
      var i = this.length - 1, l = arguments.length;
      if (l === 1) {
        prev = this[i];
        current = this[--i];
      }
      else if (l > 1) {
        prev = initialValue;
        current = this[i];
      }
      for (; i !== -1; --i) {
        prev = callback(prev, current, i, this);
        current = this[i - 1];
      }
      return prev;
    };
  }

})();