/// <reference path="../reference.ts" />
'use strict';

(function () {

  /* @ngInject */
  function <%= cameledName %>($delegate) {
    // decorate the $delegate
    return $delegate;
  }

  angular
    .module('<%= scriptAppName %>Internal')
    .config($provide => $provide.decorator('$http', <%= cameledName %>));

})();
