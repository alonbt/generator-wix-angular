/// <reference path="../reference.ts" />
'use strict';

class <%= classedName %>Controller {
  $scope: ng.IRootScopeService;
  awesomeThings: string[];

  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;

    this.awesomeThings = [
      'Bower',
      'Grunt',
      'Haml',
      'Compass',
      'AngularJS',
      'Karma'
    ];
  }

  clickHandler() {
    this.$scope.$emit('we are using controllerAs syntax, scope is used only for events and watches');
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .controller('<%= classedName %>Controller', <%= classedName %>Controller);
