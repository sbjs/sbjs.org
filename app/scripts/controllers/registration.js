'use strict';

angular.module('sbjsApp')
  .controller('RegistrationCtrl', function ($scope, $http, $cookies) {
    $scope.forkMembersRepo = function(){
    	// code to POST fork sbjs members repo
    	console.log("Fork that pork!");
    	$http.post('https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token='+$cookies.token, {}).then(function(res){
    		console.log("success!");
    	});
    };
  });
