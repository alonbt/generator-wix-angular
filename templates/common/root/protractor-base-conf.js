'use strict';

var serverRunner = require('wix-gruntfile/server-runner');
var serverInstance;

module.exports.config = {
  onPrepare: function () {
    serverInstance = serverRunner('test/e2e/lib/mock-server.js', ['3333']);
  },
  onCleanUp: function () {
    serverInstance.kill();
  }
};
