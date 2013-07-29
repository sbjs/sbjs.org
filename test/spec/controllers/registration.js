'use strict';

describe('Controller: RegistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var RegistrationCtrl,
    scope, cookies, http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $cookies, $http) {
    scope = $rootScope.$new();
    http = $http;
    cookies = $cookies;
    RegistrationCtrl = $controller('RegistrationCtrl', {
      $scope: scope,
      $http: http,
      $cookies: cookies
    });
  }));

  it("is defined", function() {
    cookies.token = "123456654321";
    var thenSpy = jasmine.createSpy("then");
    spyOn(http, "post").andReturn({
      then : thenSpy
    });
    var url = 'https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token='+cookies.token;

    scope.forkMembersRepo();

    expect(http.post).toHaveBeenCalledWith(url, {});
    expect(thenSpy).toHaveBeenCalled();
  });
  
});
