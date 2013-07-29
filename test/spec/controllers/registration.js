'use strict';

describe('Controller: RegistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var RegistrationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationCtrl = $controller('RegistrationCtrl', {
      $scope: scope
    });
  }));
  
});
