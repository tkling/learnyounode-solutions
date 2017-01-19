var filenameFilter = require('./filter-module.js');

var filedir = process.argv[2]
var fileext = process.argv[3]

filenameFilter(filedir, fileext, function(err, filteredFiles) {
  if (err) { return console.log(err); }
  filteredFiles.forEach(function(file) { console.log(file) });
});
