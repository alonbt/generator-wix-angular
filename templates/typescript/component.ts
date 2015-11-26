/// <reference path="../../../reference.ts" />
'use strict';
<% if (name === 'settings') { %>
declare var Wix: any;
<% } %>
class <%= classedName %> {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {
<% if (name === 'settings') { %>
    Wix.UI.initialize({});
<% } %>
    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('<%= scriptAppName %>Internal')
  .component('<%= cameledName %>', {
    <% if (templateUrl) { %>templateUrl: '<%= templateUrl %>',<% } else { %>template: '<div ng-click="<%= cameledName %>.onClick()">This is {{<%= cameledName %>.name}} ({{<%= cameledName %>.clicks}})</div>',<% } %>
    controller: <%= classedName %>,
    bindings: {
      name: '='
    }
  });
