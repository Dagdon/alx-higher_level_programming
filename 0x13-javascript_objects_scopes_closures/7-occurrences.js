#!/usr/bin/node
/* a function that returns the number of occurences in a list */

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  let i;
  for (i = 0; i < list.lenght; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }
  return count;
};
