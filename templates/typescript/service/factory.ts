/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  $interpolate: ng.IInterpolateService;
  meaningOfLife: string;

  /* @ngInject */
  inject($interpolate: ng.IInterpolateService) {
    this.$interpolate = $interpolate;
  }

  constructor(meaningOfLife: number) {
    this.meaningOfLife = this.$interpolate('It is {{answer}}!')({answer: meaningOfLife});
  }

  getMeaningOfLife(): string {
    return this.meaningOfLife;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .factory('<%= classedName %>', function($injector) {
    return function() {
      var instance = Object.create(<%= classedName %>.prototype);
      $injector.invoke(instance.inject || angular.noop, instance);
      <%= classedName %>.apply(instance, arguments);
      return instance;
    };
  });
