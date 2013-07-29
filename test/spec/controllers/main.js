'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('defines the githubLoginUrl', function() {
    expect(scope.githubLoginUrl).toEqual('https://github.com/login/oauth/authorize?client_id=f9aa961f63df8c7b766a&scope=user,user:email,public_repo');
  });

});
