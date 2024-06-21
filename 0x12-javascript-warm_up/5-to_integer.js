#!/usr/bin/node
/* converts string to an integer or prints NaN */
const args = process.argv[2];
if (args === undefined || isNaN(parseInt(args))) {
  console.log('Not a Number');
} else {
  console.log('My number: ' + parseInt(args));
}
