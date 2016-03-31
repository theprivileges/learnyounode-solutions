'use strict';

var http = require('http');
var myPromise;
var p1;
var p2;
var p3;

myPromise = function (endpoint) {
    return new Promise(function (resolve, reject) {
        var body = '';
        http.get(endpoint, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (data) {
                body += data;
            });
            res.on('end', function () {
                resolve(body);
            });
            res.resume();
        }).on('error', reject);
    });
};

p1 = myPromise(process.argv[2]);
p2 = myPromise(process.argv[3]);
p3 = myPromise(process.argv[4]);

Promise.all([p1, p2, p3]).then(function (values) {
    values.forEach(function (value) {
        console.log(value);
    });
});
