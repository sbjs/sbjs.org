'use strict';

angular.module('sbjsApp', ['ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html',controller: 'MainCtrl'})
      .when('/auth', {templateUrl: 'views/auth.html',controller: 'AuthCtrl'})
      .when('/profile', {templateUrl: 'views/profile.html', controller: 'ProfileCtrl'})
      .otherwise({
        redirectTo: '/'
      });
  });
