'use strict';

angular.module('sbjsApp')
  .controller('FireCtrl', function ($scope, angularFire) {

    $scope.notes = [];
    var url = 'https://sbjs.firebaseio.com/notes';
    var promise = angularFire(url, $scope, 'notes', [])
    .then( function(todos){
      startWatch($scope);
    });
  }
);


function startWatch($scope) {
  $scope.addNote = function(){
    var note = {
      'githubUserId': 'HardCoded',
      'message': $scope.newMessage
    };
    $scope.notes.push(note);
    $scope.newMessage = '';
  };
}
