/// <reference path="../../../reference.ts" />
'use strict';

class <%= classedName %> {
  /* @ngInject */
  constructor() {
    //
  }

  decorate($delegate: ng.IHttpService) {
    // decorate the $delegate
    return $delegate;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .config($provide => $provide.decorator('$http', ($injector, $delegate) => {
    let <%= cameledName %> = $injector.instantiate(<%= classedName %>);
    return <%= cameledName %>.decorate($delegate);
  }));
