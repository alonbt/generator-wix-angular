/// <reference path="../../reference.ts" />
'use strict';

describe('Service: <%= cameledName %>', () => {
  var <%= cameledName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(_<%= cameledName %>_ => {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.someMethod()).toBe(42);
  });

});
