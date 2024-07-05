#!/usr/bin/node
/* create a class, inialise it and if w and h is not = 0 or -1 create an empty object */

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
