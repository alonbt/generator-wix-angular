'use strict';

var experiments = {

};

module.exports = {
  debug: true,
  enableMocks: false,
  experiments: JSON.stringify(experiments),
  locale: 'en',<% if (dashboardApp) { %>
  metaSiteId: 'c853c829-503e-48b1-892f-28d8c22a887c',<% } %>
  clientTopology: {
    generatorTestStaticsUrl: '',
    staticBaseUrl: '//static.parastorage.com/'
  }<% if (!dashboardApp) { %>,
  newRelicEndUserHeader: '',
  newRelicEndUserFooter: ''<% } %>
};
