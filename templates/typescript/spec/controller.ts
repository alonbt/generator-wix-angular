/// <reference path="../../reference.ts" />
'use strict';

describe('Controller: <%= classedName %>Controller', () => {
  let <%= cameledName %>: <%= classedName %>Controller;
  let scope: ng.IScope;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
    <%= cameledName %> = $controller('<%= classedName %>Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', () => {
    expect(<%= cameledName %>.awesomeThings.length).toBe(7);
  });
});
