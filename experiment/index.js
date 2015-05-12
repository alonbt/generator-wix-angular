'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var angularUtils = require('../util.js');
var Configstore = require('configstore');
var packageName = require('../package').name;

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.requestExperimentDetails = function requestExperimentDetails() {
  var conf = new Configstore(packageName);
  var STORAGE_SETTINGS_KEY = 'wix_angular_experiments';
  var promptsDefaults = conf.get(STORAGE_SETTINGS_KEY);

  if(promptsDefaults === undefined) {
    promptsDefaults = {
      owner: angularUtils.getGitConfigValue('user.email') || 'shahart@wix.com',
      scope: 'my-account',
      onlyForLoggedInUsers: 'true'
    };
  }

  var promptForEmail = {
    input: 'input',
    name: 'owner',
    message: 'Owner email',
    default: promptsDefaults.owner
  };

  var promptForScopeName = {
    type: 'input',
    name: 'scope',
    message: 'Scope Name',
    default: promptsDefaults.scope
  };

  var promptForScopeType = {
    type: 'list',
    name: 'onlyForLoggedInUsers',
    message: 'Scope Type',
    choices: [{
      name: 'Only for logged in users',
      value: 'true'
    }, {
      name: 'All user types',
      value: 'false'
    }],
    default: promptsDefaults.onlyForLoggedInUsers
  };

  var done = this.async();
  var that = this;
  this.prompt([promptForEmail, promptForScopeName, promptForScopeType], function (answers) {
    that.owner = answers.owner;
    that.scope = answers.scope;
    that.onlyForLoggedInUsers = answers.onlyForLoggedInUsers;
    conf.set(STORAGE_SETTINGS_KEY, answers);
    done();
  });
};

Generator.prototype.createExperimentFile = function createExperimentFile() {
  this.template('common/petri.json', path.join(this.env.options.appPath, 'petri-experiments', this.name + '.json'));
};
