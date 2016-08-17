angular.module('users').controller('MainController', ['$scope', 'Authentication', 'NameFactory',
  function($scope, Authentication, NameFactory) {
    
    //services
    $scope.name = Authentication.user ? Authentication.user.fullName : 'Not logged in!';
    $scope.authentication = Authentication;
    $scope.namesSample = NameFactory;

    //titles
    $scope.routeTitle_1 = "Users View";
    $scope.routeTitle_2 = "Edit Users";
    $scope.routeTitle_3 = "Search Users";
  }
]);