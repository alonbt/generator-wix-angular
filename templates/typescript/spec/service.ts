/// <reference path="../../../reference.ts" />
'use strict';

describe('Service: <%= cameledName %>', () => {
  let <%= cameledName %>: <%= classedName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject((_<%= cameledName %>_: <%= classedName %>) => {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.someMethod()).toBe(42);
  });

});
