/// <reference path="../reference.ts" />
'use strict';

class <%= classedName %> {
  /* @ngInject */
  constructor() {
    //
  }

  filter(input) {
    return `<%= cameledName %> filter: ${input}`;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .filter('<%= cameledName %>', $injector => {
    let <%= cameledName %> = $injector.instantiate(<%= classedName %>);
    return <%= cameledName %>.filter.bind(<%= cameledName %>);
  });
