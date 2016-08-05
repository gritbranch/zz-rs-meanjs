angular.module('course').controller('CourseController', ['$scope', 'Authentication', 'ChapterFactory',
  function($scope, Authentication, ChapterFactory) {
    $scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application';
    
    $scope.title = ChapterFactory;

    $scope.myStyle={'background-color':'blue'};

    $scope.work1={'background-image': 'url(img/work_1.jpg)'};
    $scope.work2={'background-image': 'url(img/work_2.jpg)'};
    $scope.work3={'background-image': 'url(img/work_3.jpg)'};
    $scope.work4={'background-image': 'url(img/work_4.jpg)'};
  }
]);