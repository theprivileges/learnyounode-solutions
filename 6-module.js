'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, files) {
        var list;
        if (err) { return callback(err, null); }

        list = files.filter(function (file) {
            return (path.extname(file) === '.' + extension);
        });

        return callback(null, list);
    });
};
