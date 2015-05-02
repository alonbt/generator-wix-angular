/// <reference path="../reference.ts" />
'use strict';

class <%= classedName %> {
  salutation: string;

  /* @ngInject */
  constructor(provider: <%= classedName %>Provider) {
    this.salutation = provider.salutation;
  }

  greet(): string {
    return this.salutation;
  };
}

class <%= classedName %>Provider {
  salutation: string;

  /* @ngInject */
  constructor() {
    this.salutation = 'Hello';
  }

  setSalutation(salutation: string) {
    this.salutation = salutation;
  };

  /* @ngInject */
  $get($injector: ng.auto.IInjectorService): <%= classedName %> {
    return $injector.instantiate(<%= classedName %>, {provider: this});
  };
}

angular
  .module('<%= scriptAppName %>Internal')
  .provider('<%= cameledName %>', <%= classedName %>Provider);
