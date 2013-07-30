'use strict';

angular.module('sbjsApp')
.controller('RegistrationCtrl', function ($scope, $http, $cookies) {
  $scope.forkMembersRepo = function(){
    // code to POST fork sbjs members repo
    var url = 'https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token='+$cookies.token;
    $http.post(url, {}).then(function(res){
      console.log('success!');
    });
  };
});
