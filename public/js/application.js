var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users']);

// Add Hashbang so they are indexable by search engine crawlers and for SEO purposes.
mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

// Fixing facebook bug with redirect
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Fixing google bug with redirect
if (window.location.href[window.location.href.length - 1] === '#' &&
    // for just the error url (origin + /#)
    (window.location.href.length - window.location.origin.length) === 2) {
    window.location.href = window.location.origin + '/#!';
}

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});