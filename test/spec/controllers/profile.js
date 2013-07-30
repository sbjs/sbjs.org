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

  describe("#parseUser", function() {
  	it("parses the user data from results", function() {
  		expect(scope.user).not.toBeDefined();

  		var result = {
  			data : {
  				"name" : "myName",
  				"avatar_url" : "http://www.avatar_url.com/?arg1=456"
  			}
  		};

  		scope.parseUser(result);

  		result.data.avatar_url += "&s=420";
  		expect(scope.user).toEqual(result.data);
  	});
  });

  describe("#fetchUserProfile", function() {
  	it("fetches user profile data from git URL", function() {
  		cookies.token = "f7djv6d5susnrn4nw";
  		var thenSpy = jasmine.createSpy("then");
  		getSpy.andReturn({
  			"then" : thenSpy
  		});
  		var url = 'https://api.github.com/user?access_token=' + cookies.token;

  		scope.fetchUserProfile();

  		expect(http.get).toHaveBeenCalledWith(url);
  		expect(thenSpy).toHaveBeenCalledWith(scope.parseUser);
  	});
  });

});
