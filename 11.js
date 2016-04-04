'use strict';

var http = require('http');
var fs = require('fs');
var file = process.argv[3];
var port = process.argv[2];
var server;

// jshint unused:false
server = http.createServer(function (request, response) {
    var stream;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    stream = fs.createReadStream(file);
    stream.pipe(response);
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(port);
