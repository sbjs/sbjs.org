'use strict';

describe('Controller: ProfileCtrl', function () {

	beforeEach(module('sbjsApp'));

  var ProfileCtrl, getSpy,
    scope, http, cookies;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $cookies) {
    scope = $rootScope.$new();
    http = $http;
    cookies = $cookies;

    getSpy = spyOn(http, "get");
    getSpy.andReturn({ then : jasmine.createSpy("then") });

    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope,
      $http : http,
      $cookies : cookies
    });
  }));

});
