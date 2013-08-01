'use strict';

angular.module('sbjsApp')
.service('auth', function auth($cookies, $http, $location) {
  this.GITHUB_BASE_URL = "https://api.github.com";

  this.getToken = function(){
    var access_token = $location.search().access_token;
    if (access_token && access_token !== "undefined"){
      $cookies.token = $location.search().access_token;
      $location.search('access_token', null);
    }
    // if we dont have a token, redirect to home to authenticate
    if(!$cookies.token) {
      $location.path( '/' );
    }
    return $cookies.token;
  };

  this.parseUser = function(result){
    var user = result.data;
    user.avatar_url += "&s=420";
    return user;
  };

  this.fetchUserProfile = function(){
    var url = this.GITHUB_BASE_URL + '/user?access_token=' + this.getToken();
    return $http.get(url).then(this.parseUser);
  };  

  this.parseMembers = function(result){
    return _.pluck(result.data, 'owner');
  };

  this.fetchMembers = function(){
    var url = this.GITHUB_BASE_URL + '/repos/sbjs/sbjs.profiles/forks?access_token=' + this.getToken();
    return $http.get(url).then(this.parseMembers);
  }

});
