/// <reference path="../../reference.ts" />
'use strict';

describe('Factory: <%= classedName %>', () => {
  let <%= cameledName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
  });

  beforeEach(inject(<%= classedName %> => {
    <%= cameledName %> = new <%= classedName %>(42);
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.getMeaningOfLife()).toBe('It is 42!');
  });

});
