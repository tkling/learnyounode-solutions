var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]).toString();
var count = contents.split("\n").length - 1;

console.log(count)
