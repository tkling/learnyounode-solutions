'use strict';

const filenameFilter = require('./filter-module.js');

const filedir = process.argv[2]
const fileext = process.argv[3]

filenameFilter(filedir, fileext, function(err, filteredFiles) {
  if (err) { return console.log(err); }
  filteredFiles.forEach(function(file) { console.log(file) });
});
