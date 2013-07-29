'use strict';

angular.module('sbjsApp')
.service('utils', function($cookies, $location){

  // Still trying to find a good way of handling tokens
  this.getToken = function(){
    if ($location.search().access_token){
      $cookies.token = $location.search().access_token;
      $location.search('access_token', null);
    }
    // if we dont have a token, redirect to home to authenticate
    if(!$cookies.token) { $location.path( '/' ); }
    return $cookies.token;
  };

  this.getParamsFromString = function (paramString) {
  // From: http://stackoverflow.com/a/2880929/39758
    if(paramString.charAt(0) === '?'){
      paramString = paramString.substring(1);
    }
    var match,
    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },
    query  = paramString,//.substring(1),
    urlParams = {};

    while ((match = search.exec(query))){
      urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
  };
});


