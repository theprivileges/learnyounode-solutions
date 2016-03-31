'use strict';

var http = require('http');
var address = process.argv[2];
var body = '';

http.get(address, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        body += data;
    });
    res.on('end', function () {
        console.log(body.split('').length);
        console.log(body);
    });
    res.resume();
}).on('error', console.error);
