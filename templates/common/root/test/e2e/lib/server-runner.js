'use strict';

var spawn = require('child_process').spawn;
var serverProcess;

beforeEach(function () {
  browser.controlFlow().execute(function () {
    var deferred = protractor.promise.defer();
    serverProcess = spawn('node', ['test/e2e/lib/mock-server.js', '3333']);
    serverProcess.stdout.on('data', function () {
      deferred.fulfill();
    });
    return deferred.promise;
  });
});

afterEach(function () {
  serverProcess.kill();
});
