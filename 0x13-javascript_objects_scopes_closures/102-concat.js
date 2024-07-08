#!/usr/bin/node
/* concats two files */

const fs = require('fs');

if (process.argv.length !== 5) {
  console.log('Usage: ./102-concat.js <file1> <file2> <destination>');
  process.exit(1);
}

const file1Path = process.argv[2];
const file2Path = process.argv[3];
const destinationPath = process.argv[4];

fs.readFile(file1Path, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading ${file1Path}: ${err1}`);
    return;
  }
  fs.readFile(file2Path, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading ${file2Path}: ${err2}`);
      return;
    }
    const concatenatedContent = (data1.trim() + data2.trim()).trim();
    fs.writeFile(destinationPath, concatenatedContent, (err3) => {
      if (err3) {
        console.error(`Error writing to ${destinationPath}: ${err3}`);
      }
    });
  });
});
