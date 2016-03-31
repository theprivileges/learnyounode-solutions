'use strict';

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function (err, files) {
    var match = files.filter(function (file) {
        return (path.extname(file) === '.' + extension);
    });

    match.forEach(function (file) {
        console.log(file);
    });
});
