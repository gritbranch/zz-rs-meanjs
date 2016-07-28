angular.module('course').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'js/views/course.client.view.html'
    }).
    when('/chapter-01', {
      templateUrl: 'js/views/chapter.01.client.view.html'
    }).
    when('/chapter-02', {
      templateUrl: 'js/views/chapter.02.client.view.html'
    }).
    when('/chapter-03', {
      templateUrl: 'js/views/chapter.03.client.view.html'
    }).
    when('/chapter-04', {
      templateUrl: 'js/views/chapter.04.client.view.html'
    }).
    when('/chapter-05', {
      templateUrl: 'js/views/chapter.05.client.view.html'
    }).
    when('/chapter-06', {
      templateUrl: 'js/views/chapter.06.client.view.html'
    }).
    when('/chapter-07', {
      templateUrl: 'js/views/chapter.07.client.view.html'
    }).
    when('/chapter-08', {
      templateUrl: 'js/views/chapter.08.client.view.html'
    }).
    when('/chapter-09', {
      templateUrl: 'js/views/chapter.09.client.view.html'
    }).
    when('/chapter-10', {
      templateUrl: 'js/views/chapter.10.client.view.html'
    }).
    when('/chapter-11', {
      templateUrl: 'js/views/chapter.11.client.view.html'
    }).
    when('/chapter-12', {
      templateUrl: 'js/views/chapter.12.client.view.html'
    }).    
    when('/chapter-13', {
      templateUrl: 'js/views/chapter.13.client.view.html'
    }).
    when('/chapter-14', {
      templateUrl: 'js/views/chapter.14.client.view.html'
    }).
    when('/chapter-15', {
      templateUrl: 'js/views/chapter.15.client.view.html'
    }).
    when('/chapter-16', {
      templateUrl: 'js/views/chapter.16.client.view.html'
    }).
    when('/chapter-17', {
      templateUrl: 'js/views/chapter.17.client.view.html'
    }).    
    when('/chapter-18', {
      templateUrl: 'js/views/chapter.18.client.view.html'
    }).
    when('/chapter-19', {
      templateUrl: 'js/views/chapter.19.client.view.html'
    }).
    when('/chapter-20', {
      templateUrl: 'js/views/chapter.20.client.view.html'
    }).
    when('/chapter-21', {
      templateUrl: 'js/views/chapter.21.client.view.html'
    }).
    when('/chapter-22', {
      templateUrl: 'js/views/chapter.22.client.view.html'
    }).    
    when('/chapter-23', {
      templateUrl: 'js/views/chapter.23.client.view.html'
    }).
    when('/chapter-24', {
      templateUrl: 'js/views/chapter.24.client.view.html'
    }).
    when('/chapter-25', {
      templateUrl: 'js/views/chapter.25.client.view.html'
    }).
    when('/chapter-26', {
      templateUrl: 'js/views/chapter.26.client.view.html'
    }).
    when('/chapter-27', {
      templateUrl: 'js/views/chapter.27.client.view.html'
    }).    
    when('/chapter-28', {
      templateUrl: 'js/views/chapter.28.client.view.html'
    }).    
    otherwise({
      redirectTo: '/'
    });
  }
]);