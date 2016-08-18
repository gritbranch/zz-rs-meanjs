angular.module('users').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'js/views/users.client.view.html'
    }).
    when('/users', {
      templateUrl: 'js/views/users-list.client.view.html'
    }).
    when('/users/:userId', {
      templateUrl: 'js/views/users-view.client.view.html'
    }).
    when('/users/:userId/edit', {
      templateUrl: 'js/views/users-edit.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);