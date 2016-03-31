'use strict';

var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function (err, contents){
    if (err) { throw err; }
    console.log(contents.split('\n').length - 1);
});
