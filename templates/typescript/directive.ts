/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope, private $element: ng.IAugmentedJQuery) {
    this.$element.text(`this is ${this.name}'s directive`);
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .directive('<%= cameledName %>', () => ({
    template: '<div></div>',
    controller: <%= classedName %>,
    controllerAs: '<%= cameledName %>',
    scope: {
      name: '='
    },
    bindToController: true,
    restrict: 'E'
  }));
