/// <reference path="../../reference.ts" />
'use strict';

describe('Filter: <%= cameledName %>', () => {
  let <%= cameledName %>: Function;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(($filter: ng.IFilterService) => {
    <%= cameledName %> = $filter('<%= cameledName %>');
  }));

  it('should return the input prefixed with "<%= cameledName %> filter:"', () => {
    let text = 'angularjs';
    expect(<%= cameledName %>(text)).toBe(`<%= cameledName %> filter: ${text}`);
  });

});
