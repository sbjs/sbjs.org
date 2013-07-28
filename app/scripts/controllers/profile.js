'use strict';

angular.module('sbjsApp')
.controller('ProfileCtrl', function ($scope, $http, $location, $cookies) {

  //TODO: refactor getToken out of here. or find a more elegant way
  $scope.getToken = function(){
    if ($location.search().access_token){
      $cookies.token = $location.search().access_token;
      $location.search('access_token', null);
    }
    // if we dont have a token, redirect to home to authenticate
    if(!$cookies.token) { $location.path( '/' ); }
    return $cookies.token;
  };

  var token = $scope.getToken();
  $http.get('https://api.github.com/user?access_token='+token).then(function(res){
    $scope.user = res.data;
    $scope.user.avatar_url += '&s=420';
    console.log($scope.user);
  });

});
