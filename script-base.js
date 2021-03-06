'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');

yeoman.generators.Base.prototype.template = function template(source, destination, data) {
  data = data || this;
  destination = destination || source;

  var body = this.read(source, 'utf8').replace(/\$\{/g, '(;$};)');
  body = this.engine(body, data).replace(/\(;\$\};\)/g, '${');

  this.write(destination, body);
  return this;
};

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = this._.slugify(this._.humanize(this.appname));
  this.scriptAppName = this.options['override-app-name'] || this._.camelize(this.appname) + angularUtils.appName(this);

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  if (typeof this.env.options.testPath === 'undefined') {
    try {
      this.env.options.testPath = require(path.join(process.cwd(), 'bower.json')).testPath;
    } catch (e) {}
    this.env.options.testPath = this.env.options.testPath || 'test/spec';
  }

  this.env.options.typescript = this.options.typescript;
  if (typeof this.env.options.typescript === 'undefined') {
    this.option('typescript');
    this.option('forcejs');

    // attempt to detect if user is using CS or not
    // if cml arg provided, use that; else look for the existence of cs
    if (!this.options.typescript && !this.options.forcejs &&
      this.expandFiles(path.join(this.env.options.appPath, '/scripts/**/*.ts'), {}).length > 0) {
      this.options.typescript = true;
    }

    this.env.options.typescript = this.options.typescript;
  }

  if (typeof this.env.options.minsafe === 'undefined') {
    this.option('minsafe');
    this.env.options.minsafe = this.options.minsafe;
  }

  var sourceRoot = '/templates/javascript';
  this.scriptSuffix = '.js';

  if (this.env.options.typescript) {
    sourceRoot = '/templates/typescript';
    this.scriptSuffix = '.ts';
  }

  if (this.env.options.minsafe) {
    sourceRoot += '-min';
  }

  this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.appPath, dest) + this.scriptSuffix
  ]);
};

Generator.prototype.testTemplate = function (src, dest, spec) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.testPath, dest) + (spec === false ? '' : '.spec') + this.scriptSuffix
  ]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src,
    path.join(this.env.options.appPath, dest)
  ]);
};

Generator.prototype.addScriptToIndex = function (script) {
    var appPath = this.env.options.appPath;
    var files = this.expandFiles('*.vm', { cwd: appPath });
    files.forEach(function (file) {
      try {
        var fullPath = path.join(appPath, file);
        angularUtils.rewriteFile({
          file: fullPath,
          needle: ['<!-- endbuild --><!-- scripts -->', '<!-- endbuild -->'],
          splicable: [
            '<script src="scripts/' + script.replace('\\', '/') + '.js"></script>'
          ]
        });
      } catch (e) {
        console.log('\nUnable to find '.yellow + fullPath + '. Reference to '.yellow + script + '.js ' + 'not added.\n'.yellow);
      }
    });
};

Generator.prototype.generateSourceAndTest = function (appTemplate, testTemplate, targetDirectory, skipAdd) {
  this.appTemplate(appTemplate, path.join('scripts', targetDirectory, this.name));
  if (testTemplate) {
    this.testTemplate(testTemplate, path.join(targetDirectory, this.name));
  }
  if (!skipAdd) {
    this.addScriptToIndex(path.join(targetDirectory, this.name));
  }
};
