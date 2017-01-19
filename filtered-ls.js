var fs = require('fs')
var path = require('path')

var dirPath = process.argv[2]
var filetype = '.' + process.argv[3]

fs.readdir(dirPath, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    var filename = files[i]
    var extname = path.extname(filename)
    if (extname === filetype) { console.log(filename) }
  }
})
