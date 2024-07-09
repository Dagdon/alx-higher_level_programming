#!/usr/bin/node
/** imports and computes a dictionRY */

const dict = require('./101-data.js').dict;
const newDict = {};

Object.entries(dict).forEach(([userId, occurrences]) => {
  if (!newDict[occurrences]) {
    newDict[occurrences] = [];
  }
  newDict[occurrences].push(userId);
});

const sortedDict = {};
Object.keys(newDict).sort((a, b) => a - b).forEach(key => {
  sortedDict[key] = newDict[key].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
});

console.log(JSON.stringify(sortedDict, null, 2));
