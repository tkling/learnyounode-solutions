'use strict';

const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const filetype = '.' + process.argv[3];

fs.readdir(dirPath, function(err, files) {
  if (err) { console.error(err) }

  for (let filename of files) {
    let extname = path.extname(filename);
    if (extname === filetype) { console.log(filename) }
  }
});
