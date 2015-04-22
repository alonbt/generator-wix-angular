/// <reference path="../../reference.ts" />
'use strict';

describe('Filter: <%= cameledName %>', () => {
  var <%= cameledName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject($filter => {
    <%= cameledName %> = $filter('<%= cameledName %>');
  }));

  it('should return the input prefixed with "<%= cameledName %> filter:"', () => {
    var text = 'angularjs';
    expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);
  });

});
