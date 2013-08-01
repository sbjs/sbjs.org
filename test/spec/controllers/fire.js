'use strict';

describe('Controller: FireCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var FireCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FireCtrl = $controller('FireCtrl', {
      $scope: scope
    });
  }));

});
