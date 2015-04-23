/// <reference path="../../reference.ts" />
'use strict';

describe('Controller: <%= classedName %>Controller', () => {
  let <%= classedName %>Controller, scope;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    <%= classedName %>Controller = $controller('<%= classedName %>Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', () => {
    expect(<%= classedName %>Controller.awesomeThings.length).toBe(7);
  });
});
