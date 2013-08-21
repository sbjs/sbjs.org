'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('sbjsApp'));

  // instantiate service
  var auth;
  beforeEach(inject(function (_auth_) {
    auth = _auth_;
  }));

  it('should do something', function () {
    expect(!!auth).toBe(true);
  });

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
