'use strict';
var http = require('http');
var map = require('through2-map');
var port = process.argv[2];
var server;


server = http.createServer(function (request, response) {
    if (request.method !== 'POST') {
        response.end('\n');
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(port);
