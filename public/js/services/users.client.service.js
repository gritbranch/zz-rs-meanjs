angular.module('users').factory('Authentication', [
  function() {
    this.user = window.user;

    return {
      user: this.user
    };
  }
]);

angular.module('users').factory('NameFactory', [
  function() {
    
    var NameFactory = {firstName: "Rafael", lastName: "Salvador"}

    return NameFactory;
  }
]);

angular.module('users').factory('Users', ['$resource', function($resource) {
  return $resource('api/users/:userId', {
    articleId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}]);