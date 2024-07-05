#!/usr/bin/node
/* create a class, inialise it and if w and h is not = 0 or -1 create an empty object */

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.width; i++) {
        let row = '';
        for (let j = 0; j < this.height; j++) {
          row += 'X';
        }
        console.log(row);
      }
    }
  }
}

module.exports = Rectangle;
