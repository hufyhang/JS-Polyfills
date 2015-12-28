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
( function() {
// Object.getPrototypeOf(o)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
if (typeof Object.getPrototypeOf !== 'function') {
  Object.getPrototypeOf = function getPrototypeOf(o) {
    // Follow ES6 spec here.
    // Force `o` to be an object.
    o = Object(o);
    return o.__proto__ || o.constructor.prototype || Object.prototype;
  };
}

// Object.create(proto[, propertiesObject])
if (typeof Object.create !== 'function') {
  Object.create = ( function() {
    function F() {};
    var hasOwn = Object.prototype.hasOwnProperty;
    return function create(proto, propertiesObject) {
      // If `proto` is neither object nor null, throw error.
      if (typeof proto !== 'object') { // Fact: typeof null === 'object'
        throw TypeError(proto + ' can only be an object or null');
      }
      F.prototype = proto;
      var obj = new F();
      F.prototype = null; // Clear F.prototype
      if (typeof propertiesObject === 'object' && propertiesObject !== null) {
        for (var prop in propertiesObject) {
          if (hasOwn.call(propertiesObject, prop)) {
            obj[prop] = propertiesObject[prop];
          }
        }
      }
      return obj;
    };
  } )();
}

} )();