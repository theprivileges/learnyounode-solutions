'use strict';

var http = require('http');
var address = process.argv[2];

http.get(address, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
    res.resume();
}).on('error', function (err) {
    throw err;
});
