'use strict';

(function () {

  var <%= cameledName %> = {
    template: '<div></div>',
    controller: function ($element) {
      $element.text('this is the <%= cameledName %> component');
    }
  };

  angular
    .module('<%= scriptAppName %>Internal')
    .component('<%= cameledName %>', <%= cameledName %>);

})();
