'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var angularUtils = require('../util.js');


var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.addTypescriptSupport = function () {
  this.sourceRoot(path.join(__dirname, '../templates/typescript'));
  this.directory('root', '.', true);
};
