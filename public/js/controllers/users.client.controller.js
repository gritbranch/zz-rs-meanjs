angular.module('users').controller('UserController', ['$scope', '$routeParams', '$location', 'Authentication', 'NameFactory', 'Users',
  function($scope, $routeParams, $location, Authentication, NameFactory, Users) {
    
    //services
    $scope.name = Authentication.user ? Authentication.user.fullName : 'Not logged in!';
    $scope.authentication = Authentication;
    $scope.namesSample = NameFactory;

    //titles
    $scope.moduleName = "Users Module"
    $scope.routeTitle_main = "Users Main";
    $scope.routeTitle_list = "Users List";
    $scope.routeTitle_view = "Users View";
    $scope.routeTitle_edit = "Users Edit";

    //crud
    $scope.find = function() {
      $scope.users = Users.query();
    };

    $scope.findOne = function() {
      $scope.user = Users.get({
        userId: $routeParams.userId
      });
    };

    $scope.update = function() {
      $scope.user.$update(function() {
        $location.path('users/' + $scope.user._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.delete = function() {
      console.log("scope from delete " + $scope.user);
      $scope.user.$remove(function () {
        console.log("from inside remove ");
        $location.path('users');
      });
    };

  }
]);