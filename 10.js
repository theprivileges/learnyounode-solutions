'use strict';

var net = require('net');
var strftime = require('strftime');
var server;

server = net.createServer(function (socket) {
    var date = new Date();
    var response = strftime('%F %H:%M', date);

    socket.write(response);
    return socket.end('\n');
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(process.argv[2]);
