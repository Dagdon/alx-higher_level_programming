#!/usr/bin/node
/* a function that converts a number from base 10 to another base passed as argument: */

exports.converter = function (base) {
  return function convert(numb) {
    if (numb < base) {
      return numb < 10 ? String(numb) : String.fromCharCode(numb + 55);
    } else {
      return convert(Math.floor(numb / base)) + (numb % base < 10 ? String(numb % base) : String.fromCharCode(numb % base + 55));
    }
  };
};
