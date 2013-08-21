'use strict';

angular.module('sbjsApp')
	.controller('ProfileCtrl', function($scope, auth){
		$scope.profile = auth.fetchUserProfile();
	}
);
