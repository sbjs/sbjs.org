'use strict';

angular.module('sbjsApp')
	.controller('MembersCtrl', function($scope, auth){
		$scope.members = auth.fetchMembers();
	}
);
