'use strict';

angular.module('sbjsApp', ['ngCookies','$strap.directives'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/auth', {templateUrl: 'views/auth.html', controller: 'AuthCtrl'})
      .when('/profile', {templateUrl: 'views/profile.html', controller: 'ProfileCtrl'})
      .when('/members', {templateUrl: 'views/members.html', controller: 'MembersCtrl'})
      .when('/registration', {templateUrl: 'views/registration.html', controller: 'RegistrationCtrl'})
      .otherwise({redirectTo: '/'});
  });
