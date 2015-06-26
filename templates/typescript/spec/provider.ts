/// <reference path="../../../reference.ts" />
'use strict';

describe('Service: <%= cameledName %>', () => {
  let <%= cameledName %>: <%= classedName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
    module((<%= cameledName %>Provider: <%= classedName %>Provider) => {
      <%= cameledName %>Provider.setSalutation('Servus');
    });
  });

  beforeEach(inject((_<%= cameledName %>_: <%= classedName %>) => {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.greet()).toBe('Servus');
  });

});
