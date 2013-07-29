'use strict';

angular.module('sbjsApp')
.controller('MembersCtrl', function ($scope, $http, $cookies) {
  $http.get('https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token='+$cookies.token).then(function(res){
    $scope.members = _.pluck(res.data, 'owner');
  });

});
