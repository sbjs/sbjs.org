'use strict';

angular.module('sbjsApp', ['ngCookies','$strap.directives','firebase'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/auth', {templateUrl: 'views/auth.html', controller: 'AuthCtrl' })
      .when('/profile', {templateUrl: 'views/profile.html', controller: 'ProfileCtrl' })
      .when('/members', {templateUrl: 'views/members.html', controller: 'MembersCtrl' })
      .when('/registration', {templateUrl: 'views/registration.html', controller: 'RegistrationCtrl' })
      .when('/fire', { templateUrl: 'views/fire.html', controller: 'FireCtrl' })
      .otherwise({redirectTo: '/'});

    //Interceptor is used in case the token becomes invalid while the session is active.
    var interceptor = ['$location', '$q', function($location, $q) {
      function success(response) {
        return response;
      }

      function error(response) {
        if(response.status === 401) {
          $location.path('/');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }

      return function(promise) {
        return promise.then(success, error);
      };
    }];

    $httpProvider.responseInterceptors.push(interceptor);
  })
  .run(['$rootScope', '$location', 'auth', function ($rootScope, $location, auth) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      //this is called every time a route changed
      if (!auth.getToken()) {
        //redirect to login if we can't get a valid token
        $location.path('/');
      }
    });
  }]);
