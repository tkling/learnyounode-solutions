'use strict';

const args = process.argv.slice(2, process.argv.length);
let sum = 0;

for (let i = 0; i < args.length; i++) {
  sum += Number(args[i]);
}

console.log(sum);
