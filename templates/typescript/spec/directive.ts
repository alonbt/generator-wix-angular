/// <reference path="../../reference.ts" />
'use strict';

describe('Directive: <%= cameledName %>', () => {
  let element: ng.IAugmentedJQuery;
  let scope: ng.IRootScopeService;

  beforeEach(function () {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject($rootScope => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject($compile => {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));
});
