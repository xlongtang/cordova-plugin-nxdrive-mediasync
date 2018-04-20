var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var MediaSyncManager = function () {};

MediaSyncManager.enable = function (email) {
    return new Promise(function(resolved, rejected) {
        exec(resolved, rejected, "NXdriveMediaSync", "enableSync", [email]);
    });
};

MediaSyncManager.disable = function (email) {
    return new Promise(function(resolved, rejected) {
        exec(resolved, rejected, "NXdriveMediaSync", "disableSync", [email]);
    });
};


module.exports = MediaSyncManager;
