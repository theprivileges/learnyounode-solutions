'use strict';

var myModule = require('./6-module');
var directory = process.argv[2];
var extension = process.argv[3];

myModule(directory, extension, function (err, data) {
    if (err) { throw err; }

    data.forEach(function (file) {
        console.log(file);
    });
});
