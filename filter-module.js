var fs = require('fs');
var path = require('path');

function filenameFilter(dirname, extension, callback) {
  var extension = '.' + extension;
  var returnFiles = [];
  fs.readdir(dirname, function(err, files) {
    if (err) { return callback(err, null); }
    files.forEach(function(file) {
      if (path.extname(file) === extension) { returnFiles.push(file) }
    });
    return callback(null, returnFiles);
  });
};

module.exports = filenameFilter;
