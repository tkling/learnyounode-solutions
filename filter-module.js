'use strict';

const fs = require('fs');
const path = require('path');

function filenameFilter(dirname, extension, callback) {
  extension = '.' + extension;
  const returnFiles = [];

  fs.readdir(dirname, function(err, files) {
    if (err) { return callback(err, null); }
    files.forEach(function(file) {
      if (path.extname(file) === extension) { returnFiles.push(file) }
    });
    return callback(null, returnFiles);
  });
};

module.exports = filenameFilter;
