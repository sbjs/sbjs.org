'use strict';

angular.module('sbjsApp')
.controller('MembersCtrl', function ($scope, $http, $cookies) {
	
	$scope.parseMembers = function(result){
		$scope.members = _.pluck(result.data, 'owner');
	};

	$scope.fetchMembers = function(){
		var url = 'https://api.github.com/repos/sbjs/sbjs.profiles/forks?access_token=' + $cookies.token;
	  $http.get(url).then($scope.parseMembers);
	}

	$scope.fetchMembers();

});
