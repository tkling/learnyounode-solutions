'use strict';

const fs = require('fs')

function doneReading(err, fileContents) {
  if (err) return console.error(err);
  console.log(fileContents.split("\n").length - 1)
}

fs.readFile(process.argv[2], 'utf8', doneReading)
