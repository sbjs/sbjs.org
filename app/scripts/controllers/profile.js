'use strict';

angular.module('sbjsApp')
.controller('ProfileCtrl', function ($scope, $http, $cookies) {

	$scope.parseUser = function(result) {
		$scope.user = result.data;
		$scope.user.avatar_url += "&s=420";
	};

	$scope.fetchUserProfile = function() {
		var url = 'https://api.github.com/user?access_token=' + $cookies.token;
		$http.get(url).then($scope.parseUser);
	};

	$scope.fetchUserProfile();

});
