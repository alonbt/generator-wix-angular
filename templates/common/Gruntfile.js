// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {
  require('wix-gruntfile')(grunt, {
    cdnify: 'vm',
    port: 9000,
    preloadModule: '<%= simplename %>Preload',
    translationsModule: '<%= simplename %>Translations',
    svgFontName: '<%= _.slugify(_.humanize(simplename)) %>',
    karmaConf: require('./karma.conf.js'),
    protractor: true<% if (bowerComponent) { %>,
    bowerComponent: true<% } %>
  });

  grunt.modifyTask('yeoman', {
    //the address to which your local /_api is proxied to (to workaround CORS issues)
    api: 'http://www.pizza.wixpress.com/_api/',
    //api: 'http://localhost:3000',

    //this is the node.js fake server that e2e tests will use
    e2eTestServer: 'http://localhost:3333/',

    //the address that opens in your browser in grunt serve
    //(domain should be the same as staging so cookies will be sent in api requests)
    local: 'http://local.pizza.wixpress.com:<%%= connect.options.port %>/'
  });

  //override sauce labs browser list
  //process.env.SAUCE_BROWSERS = 'Chrome FF';

  try {
    require('./Gruntfile.private.js')(grunt); //override stuff locally
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      throw (err);
    }
  }

  //Follow this URL for instructions on how to override built-in definitions:
  //https://github.com/wix/wix-gruntfile/blob/master/README.md
};
