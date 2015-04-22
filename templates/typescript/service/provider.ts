/// <reference path="../reference.ts" />
'use strict';

// Private variables
var salutation = 'Hello';

class <%= classedName %> {
  salutation: string;

  /* @ngInject */
  constructor(provider) {
    this.salutation = provider.salutation;
  }

  greet() {
    return this.salutation;
  };
}

class <%= classedName %>Provider() {
  salutation: string;

  /* @ngInject */
  constructor() {
    this.salutation = 'Hello';
  }

  setSalutation(salutation) {
    this.salutation = salutation;
  };

  /* @ngInject */
  $get($injector) {
    return $injector.instantiate(<%= classedName %>, {provider: this});
  };
}

angular
  .module('<%= scriptAppName %>Internal')
  .provider('<%= cameledName %>', <%= classedName %>);
