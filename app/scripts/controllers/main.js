'use strict';

angular.module('sbjsApp')
.controller('MainCtrl', function ($scope, utils) {
  var options = ['client_id=f9aa961f63df8c7b766a','scope=user,user:email,public_repo'];
  $scope.githubLoginUrl = 'https://github.com/login/oauth/authorize?'+options.join('&');

  //debug
  console.log('MainCtrl.location: ', location);
  console.log('MainCtrl.location.search: ', location.search);
  // var queryParams = location.search;
  var params = utils.getParamsFromString(location.search);
  console.log('MainCtrl.params.code: ', params);
  console.log('MainCtrl.params.code: ', params.code);
});
