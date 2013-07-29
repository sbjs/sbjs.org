'use strict';

angular.module('sbjsApp')
.service('auth', function auth($cookies, $location) {

  this.getToken = function(){
    var access_token = $location.search().access_token;
    if (access_token && access_token !== "undefined"){
      $cookies.token = $location.search().access_token;
      $location.search('access_token', null);
    }
    // if we dont have a token, redirect to home to authenticate
    if(!$cookies.token) { $location.path( '/' ); }
    return $cookies.token;
  };

});
