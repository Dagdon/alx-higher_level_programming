#!/usr/bin/node
/* create a class, inialise it and if w and h is not = 0 or -1 create an empty object, double it and rotate it */

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    if (this.width && this.height) {
      for (let j = 0; j < this.height; j++) {
        console.log('X'.repeat(this.width));
      }
    }
  }

  rotate () {
    if (this.width && this.height) {
      const tmp = this.width;
      this.width = this.height;
      this.height = tmp;
    }
  }

  double () {
    if (this.width && this.height) {
      this.width *= 2;
      this.height *= 2;
    }
  }
}

module.exports = Rectangle;
