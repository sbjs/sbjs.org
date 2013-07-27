'use strict';

angular.module('sbjsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html',controller: 'MainCtrl'})
      .when('/auth', {templateUrl: 'views/auth.html',controller: 'AuthCtrl'})
      .otherwise({
        redirectTo: '/'
      });
  });
