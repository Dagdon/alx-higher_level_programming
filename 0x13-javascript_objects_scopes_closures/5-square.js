#!/usr/bin/node
/* create a class square that extends the rectangle class */
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
