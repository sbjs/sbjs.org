'use strict';

angular.module('sbjsApp')
.controller('ProfileCtrl', function ($scope, $http, $cookies) {

  $http.get('https://api.github.com/user?access_token='+$cookies.token).then(function(res){
    $scope.user = res.data;
    $scope.user.avatar_url += '&s=420';
    console.log($scope.user);
  });

});
