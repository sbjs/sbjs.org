'use strict';

describe('Controller: MembersCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var MembersCtrl, getSpy,
    scope, http, cookies;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $cookies) {
    cookies = $cookies;
    http = $http;
    scope = $rootScope.$new();

    // stubbing here so constructor does not trigger HTTP GET request
    getSpy = spyOn(http, "get");
    getSpy.andReturn({ then: jasmine.createSpy("then") });

    MembersCtrl = $controller('MembersCtrl', {
      $scope: scope,
      $http: http,
      $cookies : cookies
    });

  }));

  describe("#parseMembers", function() {
    it("parses owner objects out of result data", function() {
      expect(scope.members).not.toBeDefined();
      var result = {
        data : [
          { owner : "Jim" },
          { owner : "Remy" }
        ]
      };
      scope.parseMembers(result);
      expect(scope.members).toEqual(["Jim", "Remy"]);
    });
  });

  describe("#fetchMembers", function() {
    it("fetches members from github URL", function() {
      cookies.token = "1j2j3j475hf7";
      var thenSpy = jasmine.createSpy("then");
      getSpy.andReturn({
        then: thenSpy
      });
      var url = 'https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token=' + cookies.token;

      scope.fetchMembers();

      expect(http.get).toHaveBeenCalledWith(url);
      expect(thenSpy).toHaveBeenCalledWith(scope.parseMembers);
    });
  });
});
