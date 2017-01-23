'use strict';

const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]).toString();
const count = contents.split("\n").length - 1;

console.log(count);
