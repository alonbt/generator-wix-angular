/// <reference path="../reference.ts" />
'use strict';
<% if (name === 'settings') { %>
declare var Wix: any;
<% } %>
class <%= classedName %>Controller {
  $scope: ng.IRootScopeService;
  awesomeThings: string[];

  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
<% if (name === 'settings') { %>
    Wix.UI.initialize({});
<% } %>
    this.awesomeThings = [
      'Typescript',
      'Bower',
      'Grunt',
      'Haml',
      'Compass',
      'AngularJS',
      'Karma'
    ];
  }

  clickHandler(thing) {
    //We are using controllerAs syntax, scope is used only for events and watches
    this.$scope.$emit(`The ${thing} item was clicked!`);
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .controller('<%= classedName %>Controller', <%= classedName %>Controller);
