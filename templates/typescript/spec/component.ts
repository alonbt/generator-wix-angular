/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: <%= cameledName %>', () => {
  let element: ng.IAugmentedJQuery;
  let scope: ng.IScope;

  beforeEach(function () {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<<%= _.dasherize(name) %> name="\'kukuchumuku\'"></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toContain('This is kukuchumuku (0)');
  }));
});
