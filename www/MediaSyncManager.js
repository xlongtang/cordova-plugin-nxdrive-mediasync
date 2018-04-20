var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var MediaSyncManager = function () {};

MediaSyncManager.enable = function (email, db) {
    return new Promise(function(resolved, rejected) {
        exec(resolved, rejected, "NXdriveMediaSync", "enableSync", [email, db]);
    });
};

MediaSyncManager.disable = function (email, db) {
    return new Promise(function(resolved, rejected) {
        exec(resolved, rejected, "NXdriveMediaSync", "disableSync", [email, db]);
    });
};

MediaSyncManager.query = function (email, db) {
    return new Promise(function(resolved, rejected) {
        exec(resolved, rejected, "NXdriveMediaSync", "isSyncOn", [email, db]);
    });
};

module.exports = MediaSyncManager;
