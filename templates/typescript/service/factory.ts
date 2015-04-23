/// <reference path="../reference.ts" />
'use strict';

class <%= classedName %> {
  meaningOfLife: string;
  $interpolate: ng.IInterpolateService;

  constructor(meaningOfLife) {
    this.meaningOfLife = this.$interpolate('It is {{answer}}!')({answer: meaningOfLife});
  }

  /* @ngInject */
  inject($interpolate) {
    this.$interpolate = $interpolate;
  }

  getMeaningOfLife() {
    return this.meaningOfLife;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .factory('<%= classedName %>', function($injector) {
    return function() {
      var instance = Object.create(<%= classedName %>.prototype);
      $injector.invoke(instance.inject, instance);
      <%= classedName %>.apply(instance, arguments);
      return instance;
    }
  });
