/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  meaningOfLife: number;

  /* @ngInject */
  constructor() {
    this.meaningOfLife = 42;
  }

  someMethod(): number {
    return this.meaningOfLife;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .service('<%= cameledName %>', <%= classedName %>);
