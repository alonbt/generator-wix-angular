/// <reference path="../../reference.ts" />
'use strict';

describe('Service: <%= cameledName %>', () => {
  var <%= cameledName %>;

  beforeEach(() => {
    module('<%= scriptAppName %>Internal');
    module(<%= cameledName %>Provider => {
      <%= cameledName %>Provider.setSalutation('Servus');
    });
  });

  beforeEach(inject(_<%= cameledName %>_ => {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', () => {
    expect(<%= cameledName %>.greet()).toBe('Servus');
  });

});
