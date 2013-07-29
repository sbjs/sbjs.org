'use strict';

angular.module('sbjsApp')
.controller('MembersCtrl', function ($scope, $http, utils) {
  var token = utils.getToken();
  $http.get('https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token='+token).then(function(res){
    $scope.members = _.pluck(res.data, 'owner');
  });

});
