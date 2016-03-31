'use strict';

var fs = require('fs');
var filePath = process.argv[2];
var file;

file = fs.readFileSync(filePath);

console.log(file.toString().split('\n').length - 1);
