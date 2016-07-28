angular.module('course').controller('CourseController', ['$scope', 'Authentication', 'ChapterFactory',
  function($scope, Authentication, ChapterFactory) {
    $scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application';
    $scope.title = ChapterFactory;
  }
]);