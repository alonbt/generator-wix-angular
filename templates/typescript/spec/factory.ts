/// <reference path="../../reference.ts" />
'use strict';

describe('Factory: <%= classedName %>', () => {
  var <%= cameledName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(<%= classedName %> => {
    <%= cameledName %> = new <%= classedName %>();
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.someMethod()).toBe(42);
  });

});
