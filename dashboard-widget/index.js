'use strict';
var util = require('util');
var MiniAppBase = require('../mini-app-base.js')('widget');

var Generator = module.exports = function Generator(args) {
  MiniAppBase.apply(this, arguments);
};

util.inherits(Generator, MiniAppBase);

Generator.prototype.createMiniAppFile = function createMiniAppFile() {
  this.createAppFile();
};
