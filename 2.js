'use strict';

var args = process.argv;
var index;
var sum = 0;

for(index = 2; index < args.length; index++) {
    sum += Number(args[index]);
}

console.log(sum);
