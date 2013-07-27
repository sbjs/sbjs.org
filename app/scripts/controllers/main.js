'use strict';

angular.module('sbjsApp')
    .controller('MainCtrl', function ($scope, utils) {
        console.log("MainCtrl.location: ", location);
        console.log("MainCtrl.location.search: ", location.search);
        var queryParams = location.search
        var params = utils.getParamsFromString(location.search);
        console.log("MainCtrl.params.code: ", params);
        console.log("MainCtrl.params.code: ", params.code);

        if(params.code){

        }
        // http://localhost/?code=537fb3f6697752be4951
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('AuthCtrl', function ($scope) {
        console.log("AuthCtrl.location: ", location);
        console.log("AuthCtrl.location.search: ", location.search);

        // http://localhost/?code=537fb3f6697752be4951
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
