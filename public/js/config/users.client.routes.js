angular.module('users').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'js/views/users.client.view.html'
    }).
    when('/view', {
      templateUrl: 'js/views/users-search.client.view.html'
    }).
    when('/edit', {
      templateUrl: 'js/views/users-edit.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);