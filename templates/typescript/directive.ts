/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  /* @ngInject */
  constructor($scope: ng.IScope, $element: ng.IAugmentedJQuery) {
    $element.text('this is the <%= cameledName %> directive');
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .directive('<%= cameledName %>', () => {
    return {
      template: '<div></div>',
      controller: <%= classedName %>,
      controllerAs: '<%= cameledName %>',
      bindToController: true,
      restrict: 'EA'
    };
  });
