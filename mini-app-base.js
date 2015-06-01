'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('./script-base.js');
var yeoman = require('yeoman-generator');

module.exports = function miniAppBase(appType) {
  var Generator = function Generator(args) {
    var suffix = appType;
    if (args[0].substr(-1 * suffix.length).toLowerCase() !== suffix) {
      args[0] += '-' + suffix;
    }

    this.args = args;
    ScriptBase.apply(this, arguments);

    this.hookFor('wix-angular:main', {
      args: [this.name],
      options: {options: {
        'override-app-name': this.options['override-app-name'] || this.cameledName,
        'skip-add': true
      }}
    });

    this.hookFor('wix-angular:controller', {
      args: [this.name],
      options: {options: {
        'override-app-name': this.options['override-app-name'] || this.cameledName,
        'skip-add': true
      }}
    });
  };

  util.inherits(Generator, ScriptBase);

  Generator.prototype.createAppFile = function createAppFile() {
    this.angularModules = this.env.options.angularDeps;

    this.template('../../templates/common/' + appType + '.html', 'app/' + this.name + '.vm');
    this.template('../../templates/common/main.haml', 'app/views/' + this.name + '.haml');
    this.copy('../../app/templates/styles/scss/main.scss', 'app/styles/' + this.name + '.scss');
  };

  return Generator;
};
